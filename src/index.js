import { EventEmitter } from 'events'
import { inherits } from 'util'

function WhatevsStream(whatevs) {
  this.whatevs = whatevs
}
inherits(WhatevsStream, EventEmitter)

WhatevsStream.prototype.write = function write(record) {
  if (this.whatevs.then) {
    this.whatevs.then(func => func(record))
  } else {
    this.whatevs(record)
  }
}

export default whatevs => new WhatevsStream(whatevs)
