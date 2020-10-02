
const didDocument = {
    "@context": [
        "https://www.w3.org/ns/did/v1",
        {
            "@base": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p"
        }
    ],
    "id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
    "verificationMethod": [
        {
            "id": "#z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
            "type": "JsonWebKey2020",
            "controller": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
            "publicKeyJwk": {
                "crv": "Ed25519",
                "x": "WK0zFLKg6lRMWAbvP0S5kqs54ACQAi0Mtiur8JueK4U",
                "kty": "OKP"
            }
        },
    ]
};

const verificationMethod = `${didDocument.id}${didDocument.verificationMethod[0].id}`;


const framed = {
    "@context": "https://w3id.org/security/v2",
    "id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p#z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
    "type": "sec:JsonWebKey2020",
    "controller": {
        "id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
        "verificationMethod": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p#z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p"
    },
    "sec:publicKeyJwk": {
        "type": "@json",
        "@value": {
            "crv": "Ed25519",
            "x": "WK0zFLKg6lRMWAbvP0S5kqs54ACQAi0Mtiur8JueK4U",
            "kty": "OKP"
        }
    }
}

const expanded = [
    {
        "@id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
        "https://w3id.org/security#verificationMethod": [
            {
                "https://w3id.org/security#controller": [
                    {
                        "@id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p"
                    }
                ],
                "@id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p#z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
                "https://w3id.org/security#publicKeyJwk": [
                    {
                        "@type": "@json",
                        "@value": {
                            "crv": "Ed25519",
                            "x": "WK0zFLKg6lRMWAbvP0S5kqs54ACQAi0Mtiur8JueK4U",
                            "kty": "OKP"
                        }
                    }
                ],
                "@type": [
                    "https://w3id.org/security#JsonWebKey2020"
                ]
            }
        ]
    }
]

const didDocumentAfterCompact = {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
    "verificationMethod": {
        "id": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p#z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
        "type": "JsonWebKey2020",
        "controller": "did:key:z6MkkRR6qTeNnLF2YoVJMrKF7wnYW94LW35B77QyriEr5C2p",
        "publicKeyJwk": {
            "crv": "Ed25519",
            "x": "WK0zFLKg6lRMWAbvP0S5kqs54ACQAi0Mtiur8JueK4U",
            "kty": "OKP"
        }
    }
}

module.exports = { verificationMethod, didDocument, framed, expanded, didDocumentAfterCompact }