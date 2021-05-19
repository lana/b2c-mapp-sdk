### AriesSDK.checkPermission(permission: String)

```js readonly
AriesSDK.checkPermission('permission');
```

Ask native, if the app has been granted the permission granted by parameter.

#### Permissions supported:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `contacts` | string | READ_CONTACTS |
| `camera` | string | CAMERA |
| `location` | string | ACCESS_COARSE_LOCATION and ACCESS_FINE_LOCATION |

#### Response:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `result` | string | The result if you have the permission granted in native. `result` , `result` or `result` |

#### Result types:

| Result | Type | Description |
| ----- | ---- | ----------- |
| `granted` | string | The user has explicitly granted permission. |
| `denied` | string | The user explicitly and permanently denied permission. |
| `unknown` | string | The user has not yet granted or permanently denied permission. |

A successful response body will contain the following information:
```js readonly
{
  response: {
    "result": "granted"
  }
}
```
