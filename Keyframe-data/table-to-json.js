/* globals base, output */

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

const tblKF = base.getTable('Keyframe');
const fldKF_Key = tblKF.getField('Key');
const fldKF_Desc = tblKF.getField('Description');
const qryKF = await tblKF.selectRecordsAsync({ fields: [fldKF_Key, fldKF_Desc] });

const tblAtd = base.getTable('Attendee');
const fldAtd_ID = tblAtd.getField('ID');
const fldAtd_Name = tblAtd.getField('Name');
const fldAtd_Keyframe = tblAtd.getField('Keyframe');
const qryAtd = await tblAtd.selectRecordsAsync({
    fields: [fldAtd_ID, fldAtd_Name, fldAtd_Keyframe],
});

const tblPrz = base.getTable('Prize');
const fldPrz_ID = tblPrz.getField('ID');
const fldPrz_Atd = tblPrz.getField('Attendee');
const fldPrz_Name = tblPrz.getField('Name');
const fldPrz_MailAddr = tblPrz.getField('Mail_addr');
const fldPrz_Keyframe = tblPrz.getField('Keyframe');
const qryPrz = await tblPrz.selectRecordsAsync({
    fields: [fldPrz_ID, fldPrz_Atd, fldPrz_Name, fldPrz_MailAddr, fldPrz_Keyframe],
});

/** @type {KeyframeJSON[]} */
const keyframes = qryKF.records.map((rec) => (
    {
        key: rec.getCellValue(fldKF_Key),
        desc: rec.getCellValue(fldKF_Desc),
    }
));

/** @type {AttendeeJSON[]} */
const attendees = qryAtd.records.map((rec) => (
    {
        id: rec.getCellValue(fldAtd_ID),
        name: rec.getCellValueAsString(fldAtd_Name),
        keyframe: parseInt(rec.getCellValue(fldAtd_Keyframe)[0].name),
    }
));

/** @type {PrizeJSON[]} */
const prizes = qryPrz.records.map((rec) => (
    {
        id: rec.getCellValue(fldPrz_ID),
        attendID: parseInt(rec.getCellValue(fldPrz_Atd)[0].name),
        name: rec.getCellValueAsString(fldPrz_Name),
        mailAddr: rec.getCellValueAsString(fldPrz_MailAddr),
        keyframe: parseInt(rec.getCellValue(fldPrz_Keyframe)[0].name),
    }
));

output.markdown(`
\`\`\`js
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
const jsonKF = ${JSON.stringify(keyframes)}
/** @type {AttendeeJSON[]} */
const jsonAtd = ${JSON.stringify(attendees)}
/** @type {PrizeJSON[]} */
const jsonPrz = ${JSON.stringify(prizes)}
\`\`\`
`);
