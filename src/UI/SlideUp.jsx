import React from "react";
import Backdrop from "./Backdrop";
import CloseIcon from "@mui/icons-material/Close";

import "./SlideUp.css";

export default function SlideUp({ isOpen, close, children }) {
  return (
    <>
      <Backdrop close={close} open={isOpen} />
      <div className={`slideUp ${isOpen ? "" : "closed"}`}>
        <CloseIcon className="close" onClick={close} />
        {children}
      </div>
    </>
  );
}
