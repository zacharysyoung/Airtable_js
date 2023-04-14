/* globals base, input */
/**
 * @typedef KeyframeJSON
 * @type {{ key: number, desc: string }}
 */

/**
 * @typedef AttendeeJSON
 * @type {{ id: number, name: string, keyframe: number }}
 */

/**
 * @typedef PrizeJSON
 * @type {{ id: number, attendID: number, name: string, mailAddr: string, keyframe: number }}
 */

/** @type {KeyframeJSON[]} */
const jsonKF = [
    {
        'key': 1,
        'desc': 'Add attendance',
    },
    {
        'key': 2,
        'desc': 'First batch of claims',
    },
    {
        'key': 3,
        'desc': 'Davie\'s claim',
    },
    {
        'key': 4,
        'desc': 'Erin\'s 1st claim',
    },
    {
        'key': 5,
        'desc': 'Erin\'s 2nd claim',
    },
];

/** @type {AttendeeJSON[]} */
const jsonAtd = [
    {
        'id': 3,
        'name': 'Camille',
        'keyframe': 1,
    },
    {
        'id': 2,
        'name': 'Bobby',
        'keyframe': 1,
    },
    {
        'id': 1,
        'name': 'Alice',
        'keyframe': 1,
    },
    {
        'id': 4,
        'name': 'Davie',
        'keyframe': 1,
    },
    {
        'id': 5,
        'name': 'Erin',
        'keyframe': 1,
    },
];

/** @type {PrizeJSON[]} */
const jsonPrz = [
    {
        'id': 1,
        'attendID': 1,
        'name': 'Alice',
        'mailAddr': '123 Main St Anytown DE',
        'keyframe': 2,
    },
    {
        'id': 2,
        'attendID': 2,
        'name': 'Bobby',
        'mailAddr': '456 2nd Ave Sometown AK',
        'keyframe': 2,
    },
    {
        'id': 3,
        'attendID': 2,
        'name': 'Cedric (Bobby\'s son)',
        'mailAddr': '456 2nd Ave Sometown AK',
        'keyframe': 2,
    },
    {
        'id': 4,
        'attendID': 3,
        'name': 'camille',
        'mailAddr': '987 Third Pl Another City MN',
        'keyframe': 2,
    },
    {
        'id': 5,
        'attendID': 4,
        'name': 'Davie',
        'mailAddr': '555 Fourth Ct Fooville CA',
        'keyframe': 3,
    },
    {
        'id': 6,
        'attendID': 5,
        'name': 'Erin',
        'mailAddr': '432 Rosa Parks Dr Barnone SD',
        'keyframe': 4,
    },
    {
        'id': 7,
        'attendID': 5,
        'name': 'Erin',
        'mailAddr': '432 Rosa Parks Dr Barnone SD',
        'keyframe': 5,
    },
];

let keyOptions = jsonKF
    .sort((a, b) => a.key - b.key)
    .map((kf) => ({
        label: kf.desc, value: kf.key,
    }));
keyOptions = [
    {
        label: 'Reset', value: 0,
    }, ...keyOptions,
];

const setKey = await input.buttonsAsync('Select the key frame', keyOptions);

/** B mimics Attendee */
const tblB = base.getTable('B');
const fldB_ID = tblB.getField('ID');
const fldB_Name = tblB.getField('Name');

const allB = await tblB.selectRecordsAsync({
    fields: [fldB_ID,
    ],
});

/**
 * Map the record's RECORD_ID to its primary (numbered) ID.
 * @type {{ [id: number]:  string }}
 */
const tblB_IDtoID = {};
/** @type {number[]} */
const tblB_PrimaryIDs = [];

for (const record of allB.records) {
    const recID = record.id;
    const numberedID = record.getCellValue(fldB_ID);
    tblB_IDtoID[numberedID
    ] = recID;
    tblB_PrimaryIDs.push(numberedID);
}

const deletesB = jsonAtd
    // Delete everything after setKey...
    .filter((atd) => atd.keyframe > setKey)
    // ...that already exists in the table
    .filter((atd) => tblB_PrimaryIDs.includes(atd.id))
    .map((atd) => tblB_IDtoID[atd.id
    ]);

const createsB = jsonAtd
    .sort((atdA, atdB) => atdA.id - atdB.id)
    // Create everything up to setKey...
    .filter((atd) => atd.keyframe <= setKey)
    // ...minus anything that already exists
    .filter((atd) => !tblB_PrimaryIDs.includes(atd.id))
    .map((atd) => (
        {
            fields: {
                [fldB_ID.id]: atd.id,
                [fldB_Name.id]: atd.name,
            },
        }
    ));

/** A mimics Prize */
const tblA = base.getTable('A');
const fldA_ID = tblA.getField('ID');
const fldA_Atd = tblA.getField('Attendee');
const fldA_Name = tblA.getField('Name');
const fldA_MailAddr = tblA.getField('Mail_addr');

const allA = await tblA.selectRecordsAsync({
    fields: [fldA_ID,
    ],
});

/**
 * Map the record's RECORD_ID to its primary (numbered) ID.
 * @type {{ [id: number]:  string }}
 */
const tblA_IDtoID = {};
/** @type {number[]} */
const tblA_PrimaryIDs = [];

for (const record of allA.records) {
    const recID = record.id;
    const numberedID = record.getCellValue(fldA_ID);
    tblA_IDtoID[numberedID
    ] = recID;
    tblA_PrimaryIDs.push(numberedID);
}

const deletesA = jsonPrz
    // Delete everything after setKey...
    .filter((prz) => prz.keyframe > setKey)
    // ...that already exists in the table
    .filter((atd) => tblA_PrimaryIDs.includes(atd.id))
    .map((prz) => tblA_IDtoID[prz.id
    ]);

const createsA = jsonPrz
    .sort((przA, przB) => przA.id - przB.id)
    // Create everything up to setKey...
    .filter((prz) => prz.keyframe <= setKey)
    // ...minus anything that already exists
    .filter((prz) => !tblA_PrimaryIDs.includes(prz.id))
    .map((prz) => {
        const tblBRecID = tblB_IDtoID[prz.attendID
        ];
        return {
            fields: {
                [fldA_ID.id]: prz.id,
                [fldA_Name.id]: prz.name,
                [fldA_MailAddr.id]: prz.mailAddr,
                [fldA_Atd.id]: [{ id: tblBRecID }],
            },
        };
    });

console.log('setKey', setKey);
console.log('deletesB', deletesB);
console.log('createsB', createsB);
console.log('deletesA', deletesA);
console.log('createsA', createsA);

// Modify B (the parent) first
await tblB.deleteRecordsAsync(deletesB);
await tblB.createRecordsAsync(createsB);

// Modify A (the child) after
await tblA.deleteRecordsAsync(deletesA);
await tblA.createRecordsAsync(createsA);
