'use strict';


/**
 * Resolve a DID or other identifier.
 *
 * identifier String A DID or other identifier to be resolved.
 * accept String The requested MIME type of the DID document or DID resolution result. (optional)
 * returns Object
 **/
exports.resolve = function(identifier,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    // examples['did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF'] = {
    //   "@context": "https://www.w3.org/2019/did/v1",
    //   "id" : "did:trustgrid:0000000000123456",
    //   "publicKey" : [ {
    //     "id" : "did:trustgrid:0000000000123456#key-1",
    //     "type" : "Ed25519VerificationKey2018",
    //     "publicKeyBase58" : "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    //   } ]
    // };
    examples['did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF'] = {
      "didDocument": {
        "@context": "https://www.w3.org/ns/did/v1",
        "id": "did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF",
        "verificationMethod": [
          {
            "id": "did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF#key-1",
            "type": "Ed25519VerificationKey2018",
            "controller": "did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF",
            "publicKeyBase58": "Dw3zBGuiy84bQSXfKLZ7LpmifJiTSdWHZSSUUHAH2Fvk"
          }
        ],
        "authentication": [
          "did:tgrid:trustgrid:dev:QjA1qdXKmxzgK4u8mFoBpF#key-1"
        ]
      },
      "didDocumentMetadata": {
    
      },
      "didResolutionMetadata": {
        "contentType": "application/did+ld+json"
      }
    };

    var found = examples[identifier];
    if (found) {
      resolve(found);
    } else {
      resolve(404);
    }
  });
}

