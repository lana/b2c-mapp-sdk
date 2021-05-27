import uuidv4 from 'uuid/v4';

const hasAriesLocalBus = () => ('AriesLocalBus' in window);

const hasParent = () => (('parent' in window) && (window.parent !== window));

const showIncorrectConfigurationAlert = () => {
  console.warn(`Environment not supported. ${navigator.userAgent} | AriesLocalBus: ${window.AriesLocalBus}`); // eslint-disable-line no-console
};

const publishMessageToBus = (message) => {
  switch (true) {
    case (hasParent()):
      window.parent.postMessage(message, '*');
      break;
    case (hasAriesLocalBus()):
      window.AriesLocalBus.publish(message);
      break;
    default: showIncorrectConfigurationAlert();
  }
};

const unwrapResponse = ({ response = {} } = {}) => response;

const publishMessageToBusAndWaitForResponseWithMatchingId = (topic, params = {}) => new Promise((resolve, reject) => {
  const payload = {
    id: uuidv4(),
    topic,
    params,
  };
  const receiver = (event) => {
    if (!(event.data && (event.data.id == payload.id))) { return; } // eslint-disable-line eqeqeq
    const message = event.data;
    try {
      if (message.result === 'ok') {
        resolve(message);
        return;
      }
      reject(message);
    } finally {
      window.removeEventListener('message', receiver, false);
    }
  };
  window.addEventListener('message', receiver, false);
  publishMessageToBus(payload);
}).then(unwrapResponse);

const setupAriesOrParentMessageBus = () => {
  if (hasAriesLocalBus()) {
    const receiver = (message) => { window.postMessage(message, '*'); };
    window.AriesLocalBus.setReceiver(receiver);
    return;
  }
  if (!hasParent()) { showIncorrectConfigurationAlert(); }
};
setupAriesOrParentMessageBus();

const analyticsEvent = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('analytics.event', options);

const updateAnalyticsUserInfo = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('analytics.updateUser', options);

const closeWebView = () => publishMessageToBusAndWaitForResponseWithMatchingId('view.close');

const createSelfie = (userId) => publishMessageToBusAndWaitForResponseWithMatchingId('selfie.enrole', { userId });

const fetchAccount = () => publishMessageToBusAndWaitForResponseWithMatchingId('account.fetch');

const fetchUser = () => publishMessageToBusAndWaitForResponseWithMatchingId('user.fetch');

const isTopicSupported = (topic) => publishMessageToBusAndWaitForResponseWithMatchingId('aries.is-topic-supported', { topic });

const openEmailInbox = () => publishMessageToBusAndWaitForResponseWithMatchingId('email.inbox');

const scanBarcode = () => publishMessageToBusAndWaitForResponseWithMatchingId('scan.barcode');

const scanDocument = (name = 'proofOfAddress') => publishMessageToBusAndWaitForResponseWithMatchingId('scan.document', { name });

const scanIdentity = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('scan.identity', options);

const scanQRCode = () => publishMessageToBusAndWaitForResponseWithMatchingId('scan.qr');

const sessionSign = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('session.sign', options);

const sessionToken = () => publishMessageToBusAndWaitForResponseWithMatchingId('session.token');

const setAppBarTitle = (title = '') => publishMessageToBusAndWaitForResponseWithMatchingId('view.title', { title });

const setDefaultRegionId = (regionId = '') => publishMessageToBusAndWaitForResponseWithMatchingId('user.region-id', { regionId });

const setWebViewDismissIcon = (icon = 'close') => publishMessageToBusAndWaitForResponseWithMatchingId('view.dismiss-icon', { icon });

const setWebViewLayout = (displayMode = 'stack') => publishMessageToBusAndWaitForResponseWithMatchingId('view.layout', { displayMode });

const shareText = (content = '') => publishMessageToBusAndWaitForResponseWithMatchingId('share.text', { content });

const showSupportIcon = (show = false) => publishMessageToBusAndWaitForResponseWithMatchingId('view.show-support-icon', { show });

const transactionExecute = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('transaction.execute', options);

const verifySelfie = (userId) => publishMessageToBusAndWaitForResponseWithMatchingId('selfie.verify', { userId });

const webViewLoaded = () => publishMessageToBusAndWaitForResponseWithMatchingId('view.loaded');

const chatCreateCase = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('chat.create-case', options);

const retrieveSmsOtp = () => publishMessageToBusAndWaitForResponseWithMatchingId('sms.retrieve-otp');

const openWithDedicatedApp = (options) => publishMessageToBusAndWaitForResponseWithMatchingId('view.open-with-dedicated-app', options);

const checkDevicePermissions = (permission) => publishMessageToBusAndWaitForResponseWithMatchingId('permissions.check', { permission });

const fetchContacts = () => publishMessageToBusAndWaitForResponseWithMatchingId('contacts.fetch');

const openSettings = () => publishMessageToBusAndWaitForResponseWithMatchingId('settings.open');

const getDeviceInfo = () => publishMessageToBusAndWaitForResponseWithMatchingId('device-info.fetch');

const sdk = {
  analyticsEvent,
  updateAnalyticsUserInfo,
  closeWebView,
  createSelfie,
  fetchAccount,
  fetchUser,
  isTopicSupported,
  openEmailInbox,
  scanBarcode,
  scanDocument,
  scanIdentity,
  scanQRCode,
  sessionSign,
  sessionToken,
  setAppBarTitle,
  setDefaultRegionId,
  setWebViewDismissIcon,
  setWebViewLayout,
  shareText,
  showSupportIcon,
  transactionExecute,
  verifySelfie,
  webViewLoaded,
  chatCreateCase,
  retrieveSmsOtp,
  openWithDedicatedApp,
  checkDevicePermissions,
  fetchContacts,
  openSettings,
  getDeviceInfo,
};

export default sdk;
