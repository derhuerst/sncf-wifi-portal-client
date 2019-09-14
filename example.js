'use strict'

const portal = require('.')

portal.connectionStatus()
.then(console.log)
.catch((err) => {
	console.error(err)
	process.exitCode = 1
})
