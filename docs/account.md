### AriesSDK.fetchAccount()

```js readonly
AriesSDK.fetchAccount();
```

Request data on the currently selected account. The response will include the following fields:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `product_id` | string | ID of the account's product type. |
| `owner_name` | string | Brief name of the account owner. |
| `level` | string | Level of the account, e.g `level1` |
| `num` | string | Account's regional short-number. Can be used for generating complete bank codes with a conversion algorithm. |
| `meta` | Object | List of `key/value` pairs of account metadata. For example the CLABE number in mexico |
