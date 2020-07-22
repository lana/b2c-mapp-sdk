# Lana B2C Microapp SDK Library Changelog

## v0.8.2
 - (temporary) Added analytics.eventStaging to only trigger analytics in staging environment
 
## v0.8.1
 - Added POC of a feature flag for AriesSDK events.
 
## v0.8.0
- Added `chat.create-case`

## v0.7.2
- Added back `user.region-id` and `view.show-support-icon`

## v0.6.0
- Renamed `native.open-email-inbox` to `email.inbox`
- Renamed `native.is-topic-supported` to `aries.is-topic-supported`

## v0.5.0
- Removed `user.region-id` since no µapp was using it.
- Added `native.is-topic-supported`
- Added `native.open-email-inbox`

## v.0.4.2
- Applied ESLint config as per the latest Lana FE Coding standards
- Cleaned up docs

## v.0.4.1
- Deprecating in the docs `user.region-id` and `view.show-support-icon` android apps greater than `1.0.536` will return success response but do nothing when receiving messages using those topics

## v.0.4.0
- Added support for `scan.document`

## v0.3.0
- Added support for `analytics.event`
- Added support for `view.show-support-icon`
- Added support for `user.region-id`

## v0.2.10

 - `scanIdentity` should accept a parameter which needs to specify allowed docs. Docs update for `scanIdentity`.

## v0.2.9

 - Support for `scan.identity` message and SDK request.

## v0.2.2

 - Support for `session.token` message and SDK request.

## v0.2.1

 - Fixing postMessage on native.

## v0.2.0

 - Removing dependency on Singleton. Now functional and using window message passing.

## v0.1.0

 - First import from the old libarary.
