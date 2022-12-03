if ("undefined" === typeof window) {
  // Scripts for firebase and firebase messaging
  importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
  importScripts(
    "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js"
  );

  // Initialize the Firebase app in the service worker by passing the generated config
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };

  // Initialization of the application
  firebase.initializeApp(firebaseConfig);

  // Retrieve firebase messaging
  const messaging = firebase.messaging();

  // Background message listener
  messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
}
