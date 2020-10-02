const { verificationMethod, framed, didDocument, expanded, didDocumentAfterCompact } = require('./__fixtures__')
const { documentLoader } = require('./documentLoader')
const { testFrame, testExpand, testCompact, } = require('./test-helpers')

didDocument['@context'] = ["https://www.w3.org/ns/did/v1"]

describe('without @base', () => {

    it('frame should equal fixture', async () => {
        const _frame = await testFrame(verificationMethod, documentLoader);
        expect(_frame).toEqual(framed);
    })

    it('compact matches fixture', async () => {
        const _compacted = await testCompact([
            "https://www.w3.org/ns/did/v1"
        ], expanded, documentLoader);
        expect(_compacted).toEqual(didDocumentAfterCompact);
    })

    it('expand DOES NOT match fixture', async () => {
        const _expanded = await testExpand(didDocument, documentLoader);
        expect(_expanded).not.toEqual(expanded);
    })

    it('expand DOES NOT match fixture', async () => {
        didDocument['@context'] = ["https://www.w3.org/ns/did/v1", {
            "@base": didDocument.id
        }]

        const _expanded = await testExpand(didDocument, documentLoader);
        expect(_expanded).toEqual(expanded);
    })


})
