###*
 *
 * mcoreApp Test Tool
 * @author vfasky <vfasky@gmail.com>
###
'use strict'
if !document.getElementById 'mocha'
    document.write '<div id="mocha"></div>'

require '!style!css!mocha/mocha.css'
require '!script!mocha/mocha.js'

mocha.setup 'bdd'

mcoreapp = require '../dist/mcoreApp'
mcoreapp.TestApp = require './app'
mcoreapp.expect = require('chai').expect

module.exports = mcoreapp
