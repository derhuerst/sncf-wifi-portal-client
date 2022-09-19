# sncf-wifi-portal-client

**Query information from the [SNCF WiFi portal](https://en.oui.sncf/en/tgv/services/wifi-onboard) in French TGV trains.**

[![npm version](https://img.shields.io/npm/v/sncf-wifi-portal-client.svg)](https://www.npmjs.com/package/sncf-wifi-portal-client)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/sncf-wifi-portal-client.svg)
![minimum Node.js version](https://img.shields.io/node/v/berlin-postal-code-areas.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


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


## Related

- [`record-tgv-movement`](https://github.com/derhuerst/record-tgv-movement) – Record the movement of any TGV using the on-board WiFi.
- [`wifi-on-ice-portal-client`](https://github.com/derhuerst/wifi-on-ice-portal-client) – Query information from the WifiOnICE portal in German ICE trains.
- [`digital-im-regio-portal-client`](https://github.com/derhuerst/digital-im-regio-portal-client) – Query information from the Digital im Regio portal in German Regio trains.
- [`cd-wifi-client`](https://github.com/derhuerst/cd-wifi-client) – A client for the onboard WiFi portal of České dráhy (Czech Railways) trains.
- [`portale-regionale-wifi-position`](https://github.com/derhuerst/portale-regionale-wifi-position) – Query information from the *Portale Regionale* WiFi portal in Trenitalia (Italian Railways) trains.
- [`live-icomera-position`](htttps://github.com/derhuerst/live-icomera-position) – Live vehicle geolocation, taken from the on-board Icomera WiFi system.
- [`live-gomedia-position`](htttps://github.com/derhuerst/live-gomedia-position) – Live vehicle geolocation, taken from the GoMedia on-board WiFi entertainment system.


## Contributing

If you have a question or need support using `sncf-wifi-portal-client`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/sncf-wifi-portal-client/issues).
