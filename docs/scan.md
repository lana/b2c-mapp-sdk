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
AriesSDK.scanQRCode()
```

Launch a view to scan a QR code


### AriesSDK.scanBarcode()

```js readonly
AriesSDK.scanBarcode()
```

Launch a view to scan a regular Barcode

### AriesSDK.scanDocument()

```js readonly
AriesSDK.scanDocument()
```

Launch a view to scan a document. It returns on the payload the hash for the stored document.

Response:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `hash` | string | Stored document hash. |
