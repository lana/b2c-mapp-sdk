
export default class AriesBus {

  constructor(callback) {
    this.callback = callback
    this.handler = this.determineHandler()
  }

  publish(msg) {
    this.handler(msg)
  }

  determineHandler() {
    if (this.hasAriesLocalBus()) {
      return this.handleAriesLocalBusMessages()
    } else if (this.hasParent()) {
      return this.handleParentWindowMessages()
    } else {
      alert("Invalid µApp configuration! Environment not supported.")
    }
  }

  /*** Native app support ***/

  hasAriesLocalBus() {
    return ("AriesLocalBus" in window)
  }

  handleAriesLocalBusMessages() {
    // override the LanaJSBridge
    window.AriesLocalBus.setReceiver((msg) => {
      this.callback(msg)
    });
    return (msg) => {
      window.AriesLocalBus.publish(msg)
    }
  }

  /*** Window postMessages support ***/

  hasParent() {
    return ("parent" in window && window.parent != window)
  }

  handleParentWindowMessages() {
    window.addEventListener("message", (ev) => { this.receiveParentWindowMessage(ev) }, false)
    return (msg) => {
      window.parent.postMessage(msg, "*")
    }
  }

  receiveParentWindowMessage(event) {
    // TODO: add origin checking here
    if (!event.data) {
      // sometimes we get messages with no data that we can ignore.
      return
    }
    this.callback(event.data)
  }

}
