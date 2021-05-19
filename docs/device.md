### AriesSDK.fetchDeviceInfo()

```js readonly
AriesSDK.fetchDeviceInfo();
```

It obtains information from the device, from Lana's own app and the list of installed apps.

Sends events to the different analytics provider configured in the native app.

| Field | Type | Description |
| ----- | ---- | ----------- |
| `device` | Object | Information about device |
| `lanaApplication` | Object | Information about Lana App installed |
| `packagesList` | Object | List of applications installed on the device |

```js readonly
{
  "device": {
    "brand": "google",
    "country": "US",
    "language": "es",
    "manufacturer": "Google",
    "model": "sdk_gphone64_x86_64",
    "name": "emulator64_x86_64_arm64",
    "systemName": "Android",
    "systemVersion": "30",
    "uuid": "6e87ef6e149493a4"
  },
  "lanaApplication": {
    "appInstallerPackageName": "",
    "appIsInstalledViaGooglePlay": false,
    "flavor": "staging",
    "isDebug": true,
    "name": "xyz.lana.b2c.staging",
    "version": "1.7.1-staging"
  },
  "packagesList": [
    {
      "className": "xyz.lana.b2c.LanaApplication",
      "name": "Lana",
      "packageName": "xyz.lana.b2c",
      "targetSdkVersion": 30
    }
  ]
}
```

