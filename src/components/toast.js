import React, { useEffect, useState } from "react";
import "./toast.scss";

export const Toast = ({ toastMsg, showToast, hideToast }) => {
  const [toaster, setToaster] = useState(null);
  useEffect(() => {
    if (showToast) {
      setToaster(
        <>
          <div className="toast">{toastMsg}</div>
        </>
      );
    } else {
      setToaster(null);
    }
    setTimeout(() => {
      hideToast();
    }, 5000);
  }, [toastMsg, showToast, hideToast]);
  return <>{toaster}</>;
};
