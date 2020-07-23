### AriesSDK.analyticsEvent(event: Object)

```js readonly
const payload = {
    eventName: 'the event',
    properties: {
        param1: 'value1',
        param2: false,
        param3: 123
    }
};
AriesSDK.analyticsEvent(payload);
```
Sends events to the different analytics provider configured in the native app.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `eventName` | string | Event name that will be sent to the analytics provider |
| `properties` | Object | List of `key/value` pairs |

### AriesSDK.udpateAnalyticsUserInfo(event: Object)

```js readonly
const payload = {
        fullName: '... ... ...',
        country: '...',
        email: '...',
        phoneNumber: '...',
        gender: '...',
};
AriesSDK.udpateAnalyticsUserInfo(payload);
```
Updates user information to be tracked on Analytic events.

| Field | Type | Description |
| ----- | ---- | ----------- |
|  fullName | String | Name + Surname1 + Surname2  |
|  country | String | Selected user country  |
|  email | String | Email  |
|  phoneNumber | String | Phone number  |
|  gender | String | Gender  |
