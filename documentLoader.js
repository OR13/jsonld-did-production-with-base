const { didDocument } = require('./__fixtures__')
const documentLoader = (uri) => {
    if (uri === 'https://w3id.org/security/v1') {
        return {
            "contextUrl": null,
            "documentUrl": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
            "document": JSON.stringify(require('./contexts/sec-v1.json'))
        }
    }
    if (uri === 'https://w3id.org/security/v2') {
        return {
            "contextUrl": null,
            "documentUrl": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
            "document": JSON.stringify(require('./contexts/sec-v2.json'))
        }
    }
    if (uri === 'https://www.w3.org/ns/did/v1') {
        return {
            "contextUrl": null,
            "documentUrl": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
            "document": JSON.stringify(require('./contexts/did-v1.json'))
        }
    }

    if (uri === 'did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p#z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p') {
        // console.log('loader returning did document: ', JSON.stringify(didDocument, null, 2))
        return {
            "contextUrl": null,
            "documentUrl": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
            "document": JSON.stringify(didDocument)
        }
    }
};
module.exports = { documentLoader };