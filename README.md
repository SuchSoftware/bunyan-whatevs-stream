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

## FAQ

1. Why would I wrap the function it in a Promise?

Because your whatevs may not be ready to right when you set up the logger. Perhaps your function calls some system you haven't connected to yet.  That's fine.  Give it a Promise that resolves to your whatevs.

## License

ISC License (ISC)
Copyright 2016 Such Software, LLC

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
