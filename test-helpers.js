const jsonld = require('jsonld')

const testFrame = async (verificationMethod, documentLoader) => {
    const framed = await jsonld.frame(
        verificationMethod,
        {
            '@context': 'https://w3id.org/security/v2',
            '@embed': '@always',
            id: verificationMethod,
        },
        { documentLoader, compactToRelative: false }
    );
    return framed;

}

const testExpand = async (didDocument, documentLoader) => {
    const expanded = await jsonld.expand(didDocument, { documentLoader });
    return expanded

}

const testCompact = async (context, expanded, documentLoader) => {
    const compacted = await jsonld.compact(expanded, context, {
        documentLoader,
    });
    return compacted;
}



module.exports = { testFrame, testExpand, testCompact }