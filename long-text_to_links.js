/* globals input, output */

output.markdown(
    `The script will take all lines from the _source_ table & field and 
create links to the _destination_ table.
    
In the source field, each line (delimited by a "line break") will be used to 
create a link to a new-or-existing destination record via the 
destination's _link field_.`,
);

const SRC_TBL      = await input.tableAsync('Select source table');
const SRC_TXT_FLD  = await input.fieldAsync('Select source text field', SRC_TBL);
const DST_TBL      = await input.tableAsync('Select destination table');
const DST_LINK_FLD = await input.fieldAsync('Select destination link field', DST_TBL);

async function main() {
    // All line items will be normalized to avoid small differences in casing/spacing/etc creating "unique" (but really) duplicate destination records

    const normalLineItemRecordObjMap = {};

    const srcQuery = await SRC_TBL.selectRecordsAsync({ fields: [ SRC_TXT_FLD ] });
    for (const record of srcQuery.records) {
        const longText = record.getCellValueAsString(SRC_TXT_FLD);
        const lineItems = longText.trim().split('\n');
        for (const lineItem of lineItems) {
            const normalLineItem = normalize(lineItem);

            if (!(normalLineItem in normalLineItemRecordObjMap)) {
                normalLineItemRecordObjMap[normalLineItem] = {
                    // First line-item of the non-normal form "wins" and becomes *the* canonical form
                    lineItem: lineItem,
                    records: [],
                };
            }

            // Subsequent records will use the first (canonical) form
            normalLineItemRecordObjMap[normalLineItem].records.push({ id: record.id });
        }
    }

    const dstQuery = await DST_TBL.selectRecordsAsync({ fields: [] });

    // Not documented, but a good enough way to get the "primary field" for any view or non-view; if this breaks fall back to asking the user directly
    const dstPrimaryField = DST_TBL.fields[0];

    // Map destination record's ID to its normal name
    const dstRecordNormalNameIdMap = {};
    for (const record of dstQuery.records) {
        const normalName = normalize(record.name);
        dstRecordNormalNameIdMap[normalName] = record.id;
    }

    const dstNewRecords = [];
    const dstUpdateRecords = [];

    for (const [ normalLineItem, recordObj ] of Object.entries(normalLineItemRecordObjMap)) {
        if (normalLineItem in dstRecordNormalNameIdMap) {
            const dstRecordID = dstRecordNormalNameIdMap[normalLineItem];
            dstUpdateRecords.push({
                id: dstRecordID,
                fields: {
                    [DST_LINK_FLD.id]: recordObj.records,
                },
            });
        } else {
            dstNewRecords.push({
                fields: {
                    [dstPrimaryField.name]: recordObj.lineItem,
                    [DST_LINK_FLD.id]: recordObj.records,
                },
            });
        }
    }

    await batchCreate(dstNewRecords);
    await batchUpdate(dstUpdateRecords);
}

const NON_WORD = /[^\w]/g;
/**
* @param {string} s
*/
function normalize(s) {
    return s.replace(NON_WORD, '').toLowerCase();
}

const BATCH_SIZE = 50;
/**
* @param {{ fields: { [x: string]: any; }; }[]} records
*/
async function batchCreate(records) {
    output.text(`Creating ${records.length} new records...`);
    var offset = 0;
    while (offset < records.length) {
        const start = offset;
        var end = offset + BATCH_SIZE;
        if (end > records.length) {
            end = records.length;
        }

        const batch = records.slice(start, end);

        await DST_TBL.createRecordsAsync(batch);

        output.text(`...created records ${offset+1} to ${end}...`);

        offset += BATCH_SIZE;
    }
    output.text('done.');
}

/**
* @param {{ id: string, fields: {[x: string]: any; }; }[]} records
*/
async function batchUpdate(records) {
    output.text(`Updating ${records.length} new records...`);
    var offset = 0;
    while (offset < records.length) {
        const start = offset;
        var end = offset + BATCH_SIZE;
        if (end > records.length) {
            end = records.length;
        }

        const batch = records.slice(start, end);

        await DST_TBL.updateRecordsAsync(batch);

        output.text(`...updated records ${offset+1} to ${end}...`);

        offset += BATCH_SIZE;
    }
    output.text('done.');
}

await main();
