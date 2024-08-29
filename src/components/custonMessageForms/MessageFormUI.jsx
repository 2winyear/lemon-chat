import {
    PaperAirplaneIcon,
    PaperClipIcon,
    XMarkIcon,
  } from "@heroicons/react/24/solid";
  import React, { useState } from "react";
  import Dropzone from "react-dropzone";
  import "../style.css"

  const MessageFormUI = ({
    setAttachment,
    message,
    handleChange,
    handleSubmit,
    appendText,
    handleKeyDown,
  }) => {
    const [preview, setPreview] = useState("");
  
    return (
      <div></div>
    );
  };
  
  export default MessageFormUI;