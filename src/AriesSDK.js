import uuidv4 from 'uuid/v4'

let sdk = {}

sdk.webViewLoaded = function() {
	return invoke("view.loaded", {})
}
sdk.closeWebView = function() {
	return invoke("view.close", {})
}
	
sdk.setAppBarTitle = function(title) {
	return invoke("view.title", { title: title || "" })
}

sdk.setWebViewLayout = function(displayMode) {
	return invoke("view.layout", { displayMode: displayMode || "stack" })
}

sdk.setWebViewDismissIcon = function(icon) {
	return invoke('view.dismiss-icon', { icon: icon || "close" })
}

sdk.scanQRCode = function() {
	return invoke('scan.qr', {})
}

sdk.scanBarcode = function() {
	return invoke('scan.barcode', {})
}

sdk.createSelfie = function(userId) {
	return invoke('selfie.enrole', { userId })
}

sdk.verifySelfie = function(userId) {
	return invoke('selfie.verify', { userId })
}

sdk.shareText = function(text) {
	return invoke('share.text', { text: text || "" })
}

sdk.fetchUser = function() {
	return invoke('user.fetch', {})
}

sdk.fetchAccount = function() {
	return invoke('account.fetch', {})
}

sdk.transactionExecute = function(params) {
	return invoke('transaction.execute', params)
}

sdk.sessionToken = function() {
	return invoke('session.token', {})
}

sdk.sessionSign = function(params) {
	return invoke('session.sign', params)
}

/*
 * invoke will create a promise that will publish a message
 * to the bus and wait for a response message with a matching
 * ID.
 */
function invoke(topic, params) {
	return new Promise((resolve, reject) => {
		var msg = {
			id: uuidv4(),
			topic: topic,
			params: params
		}
		let receiver = function(ev) {
			if (ev.data && ev.data.id == msg.id) {
				let msg = ev.data
				try {
					switch (msg.result) {
						case "ok":
							resolve(msg)
						default:
							reject(msg)
					}
				} finally {
					// cleanup
					window.removeEventListener("message", receiver, false)
				}
			}
		}
    window.addEventListener("message", receiver, false)
		publish(msg)
	}).then((msg) => {
		// Always extract the message response. May be an empty object.
		return msg.response || {}
	})
}

function publish(msg) {
	if (hasParent()) {
    window.parent.postMessage(msg, "*")
	} else if (hasAriesLocalBus()) {
    window.AriesLocalBus.publish(msg)
	} else {
		incorrectConfiguration()
	}
}

function hasAriesLocalBus() {
	return ("AriesLocalBus" in window)
}

function hasParent() {
	return ("parent" in window && window.parent != window)
}

// prepareEnvironment will set up a message bus either using the 
// window.AriesLocalBus, or the parent.
function prepareEnvironment() {
	if (hasAriesLocalBus()) {
		window.AriesLocalBus.setReceiver(function(msg) {
      window.postMessage(msg, "*")
    })
	} else if (!hasParent()) {
		incorrectConfiguration()
	}
}

function incorrectConfiguration() {
  alert("Invalid µApp configuration! Environment not supported.")
}

prepareEnvironment()

export default sdk
