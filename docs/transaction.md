
### AriesSDK.transactionExecute(settings: Object)

Launches the payment screen with the given settings.

| Option |  Value Type | Required |
| --- | --- | --- |
| `currency` | `String` [currency notation](https://en.wikipedia.org/wiki/ISO_4217) | **true** |
| `amount` | `String` | **true** |
| `destinationURL` | `String` | **true** |
| `title` | `String` | **true** |
| `description` | `String` | **true** |
| `type` (transfer 'default', p2p, etc...) | `String` | **false** |
| `reference` | `String` | **false** |

The response will include the following fields:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `transactionId` | string | The ID of the transaction that was just created |
