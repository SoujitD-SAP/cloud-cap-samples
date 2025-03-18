const cds = require("@sap/cds");
const { call } = require('@cap-js/ord/lib/plugin');
require("@cap-js/ord");

async function callORD() {
    const csn = await cds.load(cds.env.folders.srv);
    const ord = cds.compile.to.ord(csn);
    return ord;
}

callORD().then(ord => console.log(ord)).catch(err => console.error(err));

// CLI Command : cds compile ./srv --to ord -o /Users/I528949/Cloud CAP Samples/cloud-cap-samples/bookshop/ordDocs -o ./docs     