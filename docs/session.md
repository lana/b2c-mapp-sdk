### AriesSDK.sessionToken()

Generate a JSON Web Token, with no additional payload, for the current microapp suitable for authenticating the user from an external service with the OAuth Applications secret client key.

```js readonly
AriesSDK.sessionToken()
```

### AriesSDK.sessionSign()

Like for session.token, will generate a JSON Web Signature for the current microapp, but containing additional signed data provided in the params. NOTE: In the future, this request may cause a popup to be launched for the user's permission.

```js readonly
AriesSDK.sessionSign()
```
