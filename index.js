'use strict'

const {fetch} = require('fetch-ponyfill')({
	Promise: require('pinkie-promise')
})
// const omit = require('lodash.omit')
// const moment = require('moment-timezone')
// const slugg = require('slugg')

const endpoint = 'https://wifi.sncf/router/api/'
const userAgent = 'https://github.com/derhuerst/snvg-wifi-portal-client'

const request = async (route) => {
	if ('string' !== typeof route) throw new Error('route must be a string')

	const res = await fetch(endpoint + route, {
		mode: 'cors',
		redirect: 'follow',
		headers: {'User-Agent': userAgent},
		timeout: 2500
	})
	if (!res.ok) {
		const err = new Error(res.statusText)
		err.statusCode = res.status
		throw err
	}
	return await res.json()
}

const trip = () => request('train/details')
const tripPolyline = () => request('train/graph')
const gps = () => request('train/gps')

const coverage = () => request('train/coverage')

const connectionStatus = () => request('connection/status')
const connectionStatistics = () => request('connection/statistics')

const bar = () => request('bar/attendance')
const food = () => request('food/catalog')

module.exports = {
	trip,
	tripPolyline,
	gps,
	connectionStatus,
	connectionStatistics,
	bar,
	food
}
