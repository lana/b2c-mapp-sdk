### AriesSDK.webViewLoaded()

```js readonly
AriesSDK.webViewLoaded();
```

Call this method whenever your app has finished rendering and loading resources. Once you call the `.webViewLoaded()` method, the native bridge will hide the native loading indicator by displaying the µapp webview.

Usually called from your *App.jsx* `.componentDidMount()` and after any Router calls.

### AriesSDK.closeWebView()

```js readonly
AriesSDK.closeWebView();
```

Closes your µapp webview and returns the consumer to the last native state.


### AriesSDK.setAppBarTitle(title: String)

```js readonly
AriesSDK.setAppBarTitleTitle('My custom title');
```

Displays a custom title for the native UI top-bar.

### AriesSDK.setWebViewLayout(displayMode: 'overlay', 'stack', 'borderless-stack')

```js readonly
AriesSDK.setWebViewLayout('overlay');
```

Changes how the webview is displayed in the UI. The default mode is `stack` and it renders the webview just after the native UI top-bar.

The `overlay` mode displays the webview below the native UI top-bar, this means the webview starts at `0x 0y` from the app screen. When this mode is activated, the native UI top-bar has a transparent background allowing you to blend your µapp with the native UI.

The `borderless-stack` mode removes the bottom border of the native UI top-bar.

### AriesSDK.setWebViewDismissIcon(icon: 'close', 'back', 'none')

```js readonly
AriesSDK.setWebViewDismissIcon('back');
```

Changes the dismiss icon visible in the native UI top-bar.

### AriesSDK.showSupportIcon(show)

```js readonly
AriesSDK.showSupportIcon(false);
```

Whether we want to show (true) or hide (false) the support icon.

### AriesSDK.openWithDedicatedApp(fileAndType: Object)

```js readonly
const payload = {
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    mimeType: 'application/pdf'
};
AriesSDK.openWithDedicatedApp(payload);
```
Sends events to the different analytics provider configured in the native app.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `url` | string | the url where the file/document we want to open natively is hosted |
| `mimeType` | string | Optional, mimeType for the document we are trying to open. If missing will be inferred from the url. |

### AriesSDK.setWebViewHeight(height: Int)

```js readonly
AriesSDK.setWebViewHeight(100);
```

Sets the height of the webview when displayed in a home widget. When set to 0, the widget is hidden.
