import AriesBus from './AriesBus'

let singleton = null

/*
 * AriesSDK
 *
 * Maps function calls that return promises to events in the AriesBus.
 */
class AriesSDK {

	constructor() {
		if (! singleton) {
			singleton = this
			this.nextMsgId = 0
			this.promises = {}

			this.bus = new AriesBus((msg) => { this.receive(msg) })
		}
		return singleton
	}

	webViewLoaded() {
		return this.invoke("view.loaded", {})
	}

	closeWebView() {
		return this.invoke("view.close", {})
	}
	
	setAppBarTitle(title) {
		return this.invoke("view.title", { title: title || "" })
	}

	setWebViewLayout(displayMode) {
		return this.invoke("view.layout", { displayMode: displayMode || "stack" })
	}

	setWebViewDismissIcon(icon) {
		return this.invoke('view.dismiss-icon', { icon: icon || "close" })
	}

	scanQRCode() {
		return this.invoke('scan.qr', {})
	}

	scanBarcode() {
		return this.invoke('scan.barcode', {})
	}

	createSelfie(userId) {
		return this.invoke('selfie.enrole', { userId })
	}

	verifySelfie(userId) {
		return this.invoke('selfie.verify', { userId })
	}

	shareText(text) {
		return this.invoke('share.text', { text: text || "" })
	}

	fetchUser() {
		return this.invoke('user.fetch', {})
	}

	fetchAccount() {
		return this.invoke('account.fetch', {})
	}

	transactionExecute(params) {
		return this.invoke('transaction.execute', params)
	}

	sessionSign(params) {
		return this.invoke('session.sign', params)
	}

	invoke(topic, params) {
		return new Promise((resolve, reject) => {
			const id = ++this.nextMsgId
			this.promises[id] = { resolve, reject }
			var msg = {
				id: id,
				topic: topic,
				params: params
			}
			this.bus.publish(msg)
		}).then((msg) => {
			// Always extract the message response. May be an empty object.
			return msg.response || {}
		})
	}

	receive(msg) {
		let pr = this.promises[msg.id]
		if (!pr) {
			// ignore missing Promise
			return
		}
		delete this.promises[msg.id]
		switch (msg.result) {
			case "ok":
				pr.resolve(msg)
      default:
				pr.reject(msg)
		}
	}
}

export default new AriesSDK()
