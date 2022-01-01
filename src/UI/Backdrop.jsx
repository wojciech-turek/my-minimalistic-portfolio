import React from "react";

export default function Backdrop({ open, close }) {
  return (
    <div
      className={`backdrop ${open ? "bd_visible" : "bd_hidden"}`}
      onClick={close}
    ></div>
  );
}
