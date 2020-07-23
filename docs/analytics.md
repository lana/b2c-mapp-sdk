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
        fullName: 'Name Surname1 Surname2',
        country: 'MX',
        email: 'emailAddress@email.com',
        phoneNumber: '1231236666',
        gender: 'M',
};
AriesSDK.udpateAnalyticsUserInfo(payload);
```
Updates user information to be tracked on Analytic events.
This method MUST be used right before `AriesSDK.analyticsEvent(...)` in order to allow Native to get that new user data to be sent within the analytics payload for those events that required them.

| Field | Type | Description |
| ----- | ---- | ----------- |
|  fullName | String | Name + Surname1 + Surname2  |
|  country | String | Selected user country  |
|  email | String | Email  |
|  phoneNumber | String | Phone number  |
|  gender | String | Gender  |
