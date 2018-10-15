//-----------------------------------------------------------------------------
// src/config/configurator.js
//-----------------------------------------------------------------------------

/**
 * Test object for handling some complex logic configuration
 */
class BloogerConfig {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  sayHi() {
    console.log(`Hello, x=${this.x}, y=${this.y}`)
  }
}

export default BloogerConfig