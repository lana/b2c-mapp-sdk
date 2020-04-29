# B2C MicroApp Aries SDK

A bridge between the native platform and the webview to allow communication and interaction from both sides.

## Message Bus

The Aries browser provided by the mobile apps provides a message bus system that allows microapps to communicate with the native components.

Messages are sent from the webview with a specific event type that the native application will respond to.

| Topic Name | Sender | Description | State |
| -----------| ------ | ----------- | ----- |
| [view.loaded](docs/view.md#ariessdkwebviewloaded) | µApp | The microapp sends this message to indicate they have loaded | |
| [view.close](docs/view.md#ariessdkclosewebview) | µApp | Microapp is requesting that the session has finished and can close the window | |
| [view.layout](docs/view.md#ariessdksetwebviewlayoutdisplaymode-overlay-stack) | µApp | Set the layout. | |
| [view.dismiss-icon](docs/view.md#ariessdksetwebviewdismissiconicon-close-back-none) | µApp | Set the icon used to dismiss the view. | |
| [view.title](docs/view.md#ariessdksetappbartitletitle-string) | µApp | Set the application view title. | |
| :warning: [view.show-support-icon](docs/view.md#ariessdkshowsupporticonpayload-object) | µApp | Shows or hides the support icon from the UI. | No Op in Android versions greater than `1.0.536` |
| [scan.qr](docs/scan.md#ariessdkscanqrcode) | µApp | Launch a view to scan a QR code | |
| [scan.barcode](docs/scan.md#ariessdkscanbarcode) | µApp | Launch a view to scan a regular Barcode | |
| [scan.identity](docs/scan.md#ariessdkscanidentitysettings-object) | µApp | Launch a view to scan an identification document and verify the identity of the user for KYC purposes. | |
| [scan.document](docs/scan.md#ariessdkscandocument) | µApp | Launch a view to scan a document. | |
| [selfie.enrole](docs/selfie.md#ariessdkcreateselfieuserId-string) | µApp | Launch a view that will be used to enrole a new selfie, usually used in signup. | |
| [selfie.verify](docs/selfie.md#ariessdkverifyselfieuserId-string) | µApp | Launch a view to verify an existing selfie. |
| [user.fetch](docs/user.md#ariessdkfetchuser) | µApp | Request data on the current user. | |
| [account.fetch](docs/account.md#ariessdkfetchaccount) | µApp | Request data on the currently selected account. | |
| [transaction.execute](docs/transaction.md#ariessdktransactionexecutesettings-object) | µApp | Show a view that will use to provided attributes to prepare a new transaction to be sent to the server to execute inmediatly. | |
| [share.text](docs/share.md#ariessdksharetextcontent-string) | µApp | Launch the native sharing components to be able to copy and paste or send the provide text. | |
| [session.token](docs/session.md#ariessdksessiontoken) | µApp | Generate a JSON Web Token, with no additional payload, for the current microapp suitable for authenticating the user from an external service with the OAuth Applications secret client key. | |
| [session.sign](docs/session.md#ariessdksessionsign) | µApp | Like for `session.token`, will generate a JSON Web Signature for the current microapp, but containing additional signed data provided in the params. *NOTE:* In the future, this request *may* cause a popup to be launched for the user's permission. | |
| [analytics.event](docs/analytics.md#ariessdkanalyticseventevent-object) | µApp | Sends event using the native SDKs. | |
| [native.is-topic-supported](docs/native.md#istopicsupported-string) | µApp | Checks if the provided topic is supported by the native app. | Supported in android > 1.0.536 |
| [native.open-email-inbox](docs/native.md#native.openemailinbox) | µApp | Opens the native email inbox (or the activity picker if there is no default email app) | Supported in android > 1.0.536 |

Messages are published in a standardised format that must include a `topic` and `params` if there are any. For example:

```json
{
  "id": "8eb0e96c-bef9-4f4b-897e-756338a01684",
  "topic": "scan.qr",
  "params": {
    "userId": "XXXX"
  }
}
```

The `id` field is used by the SDK to determine who the sender was and respond to the correct callbacks.

Recipients of the message must take a copy of the message, and add their own fields, ensuring that any fields included in the original are also passed through. An example reply might be:

```json
{
  "id": "8eb0e96c-bef9-4f4b-897e-756338a01684",
  "topic": "scan.qr",
  "params": {
    "userId": "XXXX"
  },
  "result": "ok",
  "response": {
    "sh": "XXXXXX"
  }
}
```

The `result` field must be `"ok"` for the request to be considered resolved. The `response` field contains any additional structured data.

A failure response could be like the following setting the `result` field to `"fail"`, providing a machine readible `reason`, and a human readable `error`:

```json
{
  "id": "8eb0e96c-bef9-4f4b-897e-756338a01684",
  "topic": "scan.qr",
  "params": {
    "userId": "XXXX"
  },
  "result": "fail",
  "reason": "invalid_user",
  "error": "The provided user id does not match"
}
```

For the message bus to work, the SDK µApp library expects there to be one of two options of communication:

 * The Native application injects a `AriesLocalBus` global (i.e. on `window`) that responds to two calls: `publish(msg)` for sending messages to the native land and `setReceiver(function(msg))` that will set a callback to receive messages.
 * If no local global is found, the SDK will assume the webview is used inside an iframe and call the `window.parent.postMessage` to send messages and receive messages.

If none of the options are detected, the SDK will generate an error.

### Response Payloads

All response payloads are JSON objects. We show nested data with a `.` seperator. Fields with `[]` imply an array of sub-objects.

Response bodies should follow lowercase `snake_case` semantics, with a preference for short names. This most closely matches the naming of protobuf definitions, firebase data, and CouchDB documents.

### AriesSDK Methods

The Aries SDK methods are provided by the SDK to provide a wrapper around the message bus events. Each will return an ES6 Promise.
