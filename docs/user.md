### AriesSDK.fetchUser()

```js readonly
AriesSDK.fetchUser()
```

Request data on the current user. The response will include the following fields:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `region_id` | string | Two-letter code of the user's region. |
| `locale` | string | ISO code for user's locale, e.g. `es-MX`, `en-US`, etc. |
| `name.prefix` | string | Like Mr. Mrs. Miss, etc. Not normally used. |
| `name.given` | string | First or given name. |
| `name.surname` | string | First Surname. |
| `name.surname2` | string | Optional second surname. |
| `name.full` | string | Convenience output, shows the user's complete name. |
| `tel[].num` | string | User's active telephone numbers, the first always being the default. |
| `tel[].label` | string | Label or alternative name for the number. |

### AriesSDK.setDefaultRegionId(regionId: String)

```js readonly
AriesSDK.setDefaultRegionId('ES');
```

Provides the default region id. App will use the given value just while the user is logged out.
