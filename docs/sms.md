### AriesSDK.retrieveSmsOtp()

```js readonly
AriesSDK.retrieveSmsOtp();
```

Ask native to listen for auth sms y and retrieves the otp code.

Response:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `otp` | string | The otp code that was sent in the SMS |

A successful response body will contain the following information:
```js readonly
{
  response: {
    "otp": "123456"
  }
}
```
