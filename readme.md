# sncf-wifi-portal-client

**Query information from the [SNCF WiFi portal](https://en.oui.sncf/en/tgv/services/wifi-onboard) in French TGV trains.**

[![npm version](https://img.shields.io/npm/v/sncf-wifi-portal-client.svg)](https://www.npmjs.com/package/sncf-wifi-portal-client)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/sncf-wifi-portal-client.svg)
![minimum Node.js version](https://img.shields.io/node/v/berlin-postal-code-areas.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install sncf-wifi-portal-client
```


## Usage

```js
const portal = require('sncf-wifi-portal-client')

portal.connectionStatus()
.then(console.log, console.error)
```

```js
{
	active: true,
	status_code: 200,
	status_description: 'ip has active grant',
	service_class: 5,
	granted_bandwidth: 100000,
	remaining_data: 75453,
	consumed_data: 1346,
	next_reset: 1568471384091,
	profileId: 'AUTO-LOGIN-PROFILE-ID'
}
```


## Contributing

If you have a question or need support using `sncf-wifi-portal-client`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/sncf-wifi-portal-client/issues).
