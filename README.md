# B2C MicroApp Aries SDK

A bridge between the native platform and the webview to allow communication and interaction from both sides.

## Message Bus

The Aries browser provided by the mobile apps provides a message bus system that allows microapps to communicate with the native components.

Messages are sent from the webview with a specific event type that the native application will respond to.

| Topic Name | Sender | Description |
| ------------ | ------ | ----------- |
| `view.loaded` | µApp | The microapp sends this message to indicate they have loaded |
| `view.close` | µApp | Microapp is requesting that the session has finished and can close the window |
| `view.layout` | µApp | Set the layout. |
| `view.dismiss-icon` | µApp | Set the icon used to dismiss the view. |
| `view.title` | µApp | Set the application view title. |
| `scan.qr` | µApp | Launch a view to scan a QR code |
| `scan.barcode` | µApp | Launch a view to scan a regular Barcode |
| `scan.identity` | µApp | Launch a view to scan an identification document and verify the identity of the user for KYC purposes. |
| `selfie.enrole` | µApp | Launch a view that will be used to enrole a new selfie, usually used in signup. |
| `selfie.verify` | µApp | Launch a view to verify an existing selfie. |
| `user.fetch` | µApp | Request data on the current user. |
| `account.fetch` | µApp | Request data on the currently selected account. |
| `transaction.execute` | µApp | Show a view that will use to provided attributes to prepare a new transaction to be sent to the server to execute inmediatly. |
| `transaction.request` | µApp | Similar to `transaction.execute`, but will send a request to receive money. |
| `share.text` | µApp | Launch the native sharing components to be able to copy and paste or send the provide text. |
| `session.token` | µApp | Generate a JSON Web Token, with no additional payload, for the current microapp suitable for authenticating the user from an external service with the OAuth Applications secret client key. |
| `session.sign` | µApp | Like for `session.token`, will generate a JSON Web Signature for the current microapp, but containing additional signed data provided in the params. *NOTE:* In the future, this request *may* cause a popup to be launched for the user's permission. |

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

#### User

User details are provided on the `user.fetch` topic.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `region_id` | string | Two-letter code of the user's region. |
| `locale` | string | ISO code for user's locale, e.g. `es-MX`, `en-US`, etc. |
| `name.prefix` | string | Like Mr. Mrs. Miss, etc. Not normally used. |
| `name.given` | string | First or given name. |
| `name.surname` | string | First Surname. |
| `name.surname2` | string | Optional second surname. |
| `name.full` | string | Convenience output, shows the user's complete name. |
| `tel[].num` | string | User's active telephone numbers, the first always being the default. |
| `tel[].label` | string | Label or alternative name for the number. |

#### Account

Accounts are povided on the `account.fetch` topic.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `product_id` | string | ID of the account's product type. |
| `owner_name` | string | Brief name of the account owner. |
| `num` | string | Account's regional short-number. Can be used for generating complete bank codes with a conversion algorithm. |


## AriesSDK Methods

The following methods are provided by the SDK to provide a wrapper around the message bus events. Each will return an ES6 Promise.

### AriesSDK.webViewLoaded()

Call this method whenever your app has finished the rendering and resource loading. Once you call `.webViewLoaded()` method, the native bridge will hide the native loading indicator by displaying the µapp webview.

Usually called from your *App.jsx* `.componentDidMount()` and after any Router calls.

```js readonly
AriesSDK.webViewLoaded()
```

### AriesSDK.closeWebView()

Closes your µapp webview and returns the consumer to the latest native state.

```js readonly
AriesSDK.closeWebView()
```

### AriesSDK.setAppBarTitle(title: String)

Displays a custom title for the native UI top-bar.

```js readonly
AriesSDK.setAppBarTitleTitle('My custom title')
```

### AriesSDK.setWebViewLayout(displayMode: 'overlay', 'stack')

Changes how the webview is displayed in the UI. The default mode is `stack` and it renders the webview just after the native UI top-bar.

The `overlay` mode displays the webview below the native UI top-bar, this means the webview starts a 0x 0y from the app screen. When this mode is activated, the native UI top-bar has a transparent background alowing you to blend your µapp with the native UI.

```js readonly
AriesSDK.setWebViewLayout('overlay')
```

### AriesSDK.setWebViewDismissIcon(icon: 'close', 'back', 'none')

Changes the dismiss icon visible in the native UI top-bar.

```js readonly
AriesSDK.setWebViewDismissIcon('back')
```

### AriesSDK.shareText(content: String)

Allows the webview share any string content through the native share screen

```js readonly
AriesSDK.shareText('text to share')
```


### AriesSDK.transactionExecute(settings: Object)

Launches the payment screen with the given settings.

| Option |  Value Type | Required |
| --- | --- | --- |
| `currency` | `String` [currency notation](https://en.wikipedia.org/wiki/ISO_4217) | **true** | 
| `amount` | `String` | **true** | 
| `destinationURL` | `String` | **true** | 
| `title` | `String` | **true** | 
| `meta` | `String` | **true** | 

### AriesSDK.scanIdentity(settings: Object)

Launch a view to scan an identification document and verify the identity of the user for KYC purposes.

| Option |  Value Type | Description | Required |
| --- | --- | --- | --- |
| `allow[]` | `Array` | List of allowed countries and document types the user can select to scan | **false** |
| `allow[].countryCodes[]` | `String` | List of [2-letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for which to enable the document types in the `types` array | **true** | 
| `allow[].types[]` | `String` | Document types to enable for the specified countries. Accepted values are: `id-card`, `passport`, `resident-permit`, `eu-resident-permit`, `driver-license` | **true** | 
| `showVerbalContractScreen` | `Boolean` | Controls whether the screen where the user has to read aloud the acceptance of the terms and conditions is shown. Default is `false`. | **false** | 
