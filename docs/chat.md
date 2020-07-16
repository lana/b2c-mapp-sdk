### AriesSDK.chatCreateCase(properties: Object)

```js readonly
const caseProperties = {
    category: 'Big Problem',
    subcategory: 'whatever'
};
AriesSDK.chatCreateCase(caseProperties);
```

Initiates the native flow to create a case. `category` and `subcategory` are mandatory properties, native will validate that they exist and fail if they are not provided or empty.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `category` | string | FAQ category |
| `subcategory` | string | FAQ subcategory |
