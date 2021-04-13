'use strict'

const {fetch} = require('fetch-ponyfill')({
	Promise: require('pinkie-promise')
})
// const omit = require('lodash.omit')
// const moment = require('moment-timezone')
// const slugg = require('slugg')

const endpoint = 'https://wifi.sncf/router/api/'
const userAgent = 'https://github.com/derhuerst/snvg-wifi-portal-client'

const request = async (route, opt = {}) => {
	if ('string' !== typeof route) throw new Error('route must be a string')

	const res = await fetch(endpoint + route, {
		mode: 'cors',
		redirect: 'follow',
		headers: {'User-Agent': userAgent},
		timeout: 2500,
		...opt,
	})
	if (!res.ok) {
		const err = new Error(res.statusText)
		err.statusCode = res.status
		throw err
	}
	return await res.json()
}

const trip = request.bind(null, 'train/details')
const tripPolyline = request.bind(null, 'train/graph')
const gps = request.bind(null, 'train/gps')

const coverage = request.bind(null, 'train/coverage')

const connectionStatus = request.bind(null, 'connection/status')
const connectionStatistics = request.bind(null, 'connection/statistics')

const bar = request.bind(null, 'bar/attendance')
const food = request.bind(null, 'food/catalog')

module.exports = {
	trip,
	tripPolyline,
	gps,
	connectionStatus,
	connectionStatistics,
	bar,
	food
}
