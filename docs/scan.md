### AriesSDK.scanIdentity(settings: Object)

Launch a view to scan an identification document and verify the identity of the user for KYC purposes.

| Option |  Value Type | Description | Required |
| --- | --- | --- | --- |
| `allow[]` | `Array` | List of allowed countries and document types the user can select to scan | **false** |
| `allow[].countryCodes[]` | `String` | List of [2-letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for which to enable the document types in the `types` array | **true** |
| `allow[].types[]` | `String` | Document types to enable for the specified countries. Accepted values are: `id-card`, `passport`, `resident-permit`, `eu-resident-permit`, `driver-license` | **true** |
| `showVerbalContractScreen` | `Boolean` | Controls whether the screen where the user has to read aloud the acceptance of the terms and conditions is shown. Default is `false`. | **false** |

### AriesSDK.scanQRCode()

```js readonly
AriesSDK.scanQRCode();
```

Launch a view to scan a QR code


### AriesSDK.scanBarcode()

```js readonly
AriesSDK.scanBarcode();
```

Launch a view to scan a regular Barcode

### AriesSDK.scanDocument(documentName: String)

```js readonly
AriesSDK.scanDocument('documentName');
```

Launch a view to scan a document, if the document name is missing "proofOfAddress" will be used as a default to keep the retro-compatibility.
It returns the hash and the name of the stored document.

Response:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `hash` | string | Stored document hash. |
| `name` | string | Stored document name. :warning: This is still returned just to keep backward compatibility. It may be removed at some point |

A successful response body will contain the following information:
```js readonly
{
  response: {
    "hash": "762c406af516e07bde1c08d3d8d6c036701e49a5825b8fa785ceae3c0786695b",
    "name": "signature"
  }
}
```
