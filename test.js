'use strict'

const test = require('tape')

const {
	trip,
	tripPolyline,
	gps,
	connectionStatus,
	connectionStatistics,
	bar,
	food
} = require('.')

const shouldResolve = (name, fn) => {
	test(name + ' resolves', (t) => {
		fn()
		.then(() => t.pass('resolved'))
		.catch(t.ifError)
		.finally(() => t.end())
	})
}

shouldResolve('trip', trip)
shouldResolve('tripPolyline', tripPolyline)
shouldResolve('gps', gps)
shouldResolve('connectionStatus', connectionStatus)
shouldResolve('connectionStatistics', connectionStatistics)
shouldResolve('bar', bar)
shouldResolve('food', food)
