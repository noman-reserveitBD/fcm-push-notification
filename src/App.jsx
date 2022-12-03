import React, { useState, useEffect } from "react";

import { requestToken, onMessageListener } from "./config/fcm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notification, setNotification] = useState({ title: "", body: "" });
  requestToken();
  const notify = () => toast(<ToastDisplay />);

  function ToastDisplay() {
    return (
      <div>
        <h2 style={{ fontSize: "1em" }}>
          <b>{notification?.title}</b>
        </h2>
        <p style={{ fontSize: "0.7em" }}>{notification?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    if (notification?.title) {
      notify(notification);
    }
  }, [notification]);

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return <ToastContainer theme="dark" />;
}

export default App;
