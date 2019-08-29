# B2C MicroApp Aries SDK

A bridge between the native platform and the webview to allow communication and interaction from both sides.

## AriesSDK.appDidMount()

Call this method whenever your app has finished the rendering and resource loading. Once you call `.appDidMount()` methodm, the native bridge will hide the native loading indicator by displaying the µapp webview.

Usually called from your *App.jsx* `.componentDidMount()` and after any Router calls.

```js readonly
AriesSDK.appDidMount()
```

## AriesSDK.closeApp()

Closes your µapp webview and returns the consumer to the latest native state.

```js readonly
AriesSDK.closeApp()
```

## AriesSDK.updateUITitle(title: String)

Displays a custom title for the native UI top-bar. This is automatically handled by the `<Screen>` component `.onActive()` method.

```js readonly
AriesSDK.updateUITitle('My custom title')
```

## AriesSDK.updateUIDisplayMode(displayMode: 'overlay', 'stack')

Changes how the webview is displayed in the UI. The default mode is `stack` and it renders the webview just after the native UI top-bar.

The `overlay` mode displays the webview below the native UI top-bar, this means the webview starts a 0x 0y from the app screen. When this mode is activated, the native UI top-bar has a transparent background alowing you to blend your µapp with the native UI.

```js readonly
AriesSDK.updateUIDisplayMode('overlay')
```

## AriesSDK.updateUIDismissIcon(icon: 'close', 'back', 'none')
Changes the dismiss icon visible in the native UI top-bar. It's also automatically handled by the `<Screen>` component

```js readonly
AriesSDK.updateUIDismissIcon('back')
```

## AriesSDK.launchShareService(content: String)
Allows the webview share any string content through the native share screen

```js readonly
AriesSDK.launchShareService('text to share')
```

## AriesSDK.launchConsumerService(fields: Array['phone', 'name', 'country', 'locale', 'picture'
)

Obtains the selected consumer information passed as `fields`.

```js readonly
let {phone, name} = AriesSDK.launchConsumerService(['phone', 'name'])
```

## AriesSDK.launchPayment(settings: Object)

Launches the payment screen with the given seetings.

| Option |  Value Type | Required |
| --- | --- | --- |
| `currency` | `String` [currency notation](https://en.wikipedia.org/wiki/ISO_4217) | **true** | 
| `amount` | `String` | **true** | 
| `destinationURL` | `String` | **true** | 
| `title` | `String` | **true** | 
| `meta` | `String` | **true** | 