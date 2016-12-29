import bunyan from 'bunyan'
import Promise from 'bluebird'
import test from 'blue-tape'

import createStream from '../src/index'

test('It conforms to the stream interface', t => {
  t.plan(1)

  const thingToLog = {
    lots: 'of stuff'
  }

  const whatevs = Promise.resolve(msg => {
    t.equal(msg.lots, thingToLog.lots, 'Handles the message')
  })

  const stream = createStream(whatevs)

  stream.write(thingToLog)
})

test('It works with just a function', t => {
  t.plan(1)

  const thingToLog = {
    lots: 'of stuff'
  }

  const whatevs = msg =>
    t.equal(msg.lots, thingToLog.lots, 'Handles the message')

  const stream = createStream(whatevs)

  stream.write(thingToLog)
})

test('It works as a bunyan stream', t => {
  t.plan(1)

  const thingToLog = {
    lots: 'of stuff'
  }

  const whatevs = Promise.resolve(msg => {
    t.equal(msg.lots, thingToLog.lots, 'Handles the message')
  })

  const logger = bunyan.createLogger({
    level: 'info'
  , name: 'bunyan-whatevs-stream'
  , streams: [ { type: 'raw', stream: createStream(whatevs) } ]
  })

  logger.info(thingToLog)
})

