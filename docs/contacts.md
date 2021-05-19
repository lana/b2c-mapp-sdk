### AriesSDK.fetchContacts()

```js readonly
AriesSDK.fetchContacts();
```

Ask the native for the contacts stored on the device.

Response:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `contacts` | List<Contact> | List with device contacts. |

A successful response body will contain the following information:
```js readonly
{
  response: {
    "contacts": [
      {
        "id": 1,
        "name": "Name",
        "note": "Notes",
        "company": "Company",
        "jobTitle": "Job Title",
        "department": "Department",
        "phones": [
          {
            "phone": "+XX XXXXXXXXX",
            "type": "Mobile"
          },
          {
            "phone": "+XX XXXXXXXXX",
            "type": "Home"
          }
        ],
        "addresses": [
          {
            "city": "City 1",
            "country": "Country 1",
            "label": "Home 1",
            "region": "Region 1",
            "street": "Stret 1"
          }
        ],
        "emails": [
          {
            "email": "email@home.com",
            "type": "Home"
          },
          {
            "email": "email@work.com",
            "type": "Work"
          }
        ],
        "ims": [
          {
            "type": "@username",
            "value": "Skype"
          }
        ],
        "websites": [
          {
            "type": "Website",
            "url": "www.lana.xyz"
          }
        ]
      }
    ]
  }
}
```
#### Contact model details ####

| Field | Type | Description |
| ----- | ---- | ----------- |
|  id | Long | Contact id in local device  |
|  name | String | Name | 
|  note | String | Note | 
|  company | String | Company | 
|  department | String | Department |
|  jobTitle | String | Job Title  |
|  phones | List<Phone> | Address list | 
|  addresses | List<Address> | Address list | 
|  emails | List<Email> | Email list | 
|  ims | List<Im> | List of instant messaging services | 
|  websites | List<Website> | List of instant messaging services | 

### Models details (Phone, Address, Email, Im and Website)

#### Phone fields
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `phone` | String | Phone  |
|  `type` | String | Type |

#### Address fields
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `street` | String | Street  |
|  `city` | String | City |
|  `region` | String | Region |
|  `contry` | String | Country |
|  `label` | String | Label |

#### Email fields
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `email` | String | Email  |
|  `type` | String | Type |

#### Im fields
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `type` | String | Type  |
|  `value` | String | Value |

#### Website fields
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `type` | String | Type  |
|  `url` | String | Url |

### Types

#### Phone Types -> More info: [Android Developers](https://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Phone)
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `Home` | String | Home  |
|  `Assistant` | String | Assistant |
|  `Callback` | String | Callback  |
|  `Car` | String | Car  |
|  `Company Main` | String | Company Main  |
|  `Fax Home` | String | Fax Home  |
|  `Fax Work` | String | Fax Work  |
|  `Isdn` | String | Isdn  |
|  `Main` | String | Main  |
|  `Mms` | String | Mms  |
|  `Mobile` | String | Mobile  |
|  `Other` | String | Other |
|  `Other Fax` | String | Other Fax  |
|  `Radio` | String | Radio  |
|  `Telex` | String | Telex  |
|  `Tty TDD` | String | Tty TDD  |
|  `Work` | String | Work  |
|  `Work Mobile` | String | Work Mobile  |
|  `Work Pager` | String | Work Pager  |
|  `unknown_$type` | String | Default value when phone type is not found. `$type` is Int (Example: unkwnown_1) |

#### Address Types -> More info: [Android Developers](https://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.StructuredPostal)
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `Home` | String | Home  |
|  `Other` | String | Other |
|  `Work` | String | Work  |
|  `unknown_$type` | String | Default value when address type is not found. `$type` is Int (Example: unkwnown_1) |


#### Email Types -> More info: [Android Developers](https://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Email)
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `Home` | String | Home  |
|  `Mobile` | String | Mobile |
|  `Other` | String | Other  |
|  `Work` | String | Work  |
|  `unknown_$type` | String | Default value when email type is not found. `$type` is Int (Example: unkwnown_1) |

#### Im Types -> More info: [Android Developers](https://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Im)
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `Aim` | String | Aim  |
|  `Msn` | String | Msn |
|  `Yahoo` | String | Yahoo  |
|  `Skype` | String | Skype  |
|  `Qq` | String | Qq |
|  `Google Talk` | String | Google Talk  |
|  `Icq` | String | Icq  |
|  `Jabber` | String | Jabber  |
|  `Netmeeting` | String | Netmeeting  |
|  `unknown_$type` | String | Default value when im type is not found. `$type` is Int (Example: unkwnown_1) |

#### Website Types -> More info: [Android Developers](https://developer.android.com/reference/android/provider/ContactsContract.CommonDataKinds.Website)
| Field | Type | Description |
| ----- | ---- | ----------- |
|  `HomePage` | String | HomePage  |
|  `Blog` | String | Blog |
|  `Profile` | String | Profile  |
|  `Home` | String | Home  |
|  `Work` | String | Work |
|  `Ftp` | String | Ftp |
|  `Other` | String | Other  |
|  `unknown_$type` | String | Default value when website type is not found. `$type` is Int (Example: unkwnown_1) |
