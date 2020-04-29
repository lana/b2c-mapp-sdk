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

### AriesSDK.setWebViewLayout(displayMode: 'overlay', 'stack')

```js readonly
AriesSDK.setWebViewLayout('overlay');
```

Changes how the webview is displayed in the UI. The default mode is `stack` and it renders the webview just after the native UI top-bar.

The `overlay` mode displays the webview below the native UI top-bar, this means the webview starts at `0x 0y` from the app screen. When this mode is activated, the native UI top-bar has a transparent background alowing you to blend your µapp with the native UI.

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
