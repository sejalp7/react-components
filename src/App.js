import { useState } from "react";
import { Toast } from "./components/toast";
import "./styles.css";

export default function App() {
  const [toastVisible, setToastVisible] = useState(false);

  const hideToast = () => {
    setToastVisible(false);
  };

  const showToast = () => {
    setToastVisible(true);
  };
  return (
    <div className="App">
      <button onClick={() => showToast()}>Show Toast Message</button>
      <Toast
        toastMsg="This is a toast message"
        showToast={toastVisible}
        hideToast={hideToast}
      />
    </div>
  );
}
