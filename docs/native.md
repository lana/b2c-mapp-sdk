### AriesSDK.isTopicSupported()

```js readonly
AriesSDK.isTopicSupported('topic');
```

Checks if the given `topic` is supported on the native app. Returns a response containing a boolean parameter `isSupported`

Response:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `isSupported` | boolean | True if the method is supported. |

A successful response body will contain the following information:
```js readonly
{
  response: {
    "isSupported": false
  }
}
```

### AriesSDK.openEmailInbox()

```js readonly
AriesSDK.openEmailInbox();
```

Opens the native email inbox (or the activity picker if there is no default email app)
