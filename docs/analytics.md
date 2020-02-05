### AriesSDK.analyticsEvent(event: Object)

```js readonly
AriesSDK.analyticsEvent({
    eventName: 'the event',
    properties: {
        param1: 'value1',
        param2: false,
        param3: 123
    }
});
```
Sends events to the different analytics provider configured in the native app.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `eventName` | string | Event name that will be send to the analytics provider |
| `properties` | Object | List of `key/value` pairs |
