# bunyan-whatevs-stream

Wrap whatever function you like in such a way that you can use it as a bunyan stream.

## Installation

`npm install --save bunyan-whatevs-stream`

## Usage

The interface is straightforward.  You give it a function or a Promise that resolves to the function you want it to do.  For example, (and this would be a silly way to achieve the goal), but suppose you wanted to use this wrapper to `console.log` your messages.  Try the following:

```
import bunyan from 'bunyan'
import createStream from 'bunyan-whatevs-stream'

const whatevs = Promise.resolve(console.log)

const logger = bunyan.createLogger({
  level: 'info'
, name: 'bunyan-whatevs-stream-silly-example'
, streams: [ { stream: createStream(whatevs) } ]
})

logger.info('Heya!') // This will end up putting 'Heya!' into stdout
```

Fun, right?

### FAQ

1. Why would I wrap the function it in a Promise?

Because your whatevs may not be ready to right when you set up the logger. Perhaps your function calls some system you haven't connected to yet.  That's fine.  Give it a Promise that resolves to your whatevs.

