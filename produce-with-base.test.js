const { verificationMethod, framed, didDocument, expanded, didDocumentAfterCompact } = require('./__fixtures__')
const { documentLoader } = require('./documentLoader')
const { testFrame, testExpand, testCompact, } = require('./test-helpers')

describe('with @base ', () => {
    it('frame should equal fixture', async () => {
        const _frame = await testFrame(verificationMethod, documentLoader);
        expect(_frame).toEqual(framed);
    })

    it('expand matches fixture', async () => {
        const _expanded = await testExpand(didDocument, documentLoader);
        expect(_expanded).toEqual(expanded);
    })

    it('compact matches fixture', async () => {
        const _compacted = await testCompact([
            "https://www.w3.org/ns/did/v1"
        ], expanded, documentLoader);
        expect(_compacted).toEqual(didDocumentAfterCompact);
    })
})


