import { BrowserRouter, useRouteError } from "react-router-dom";
import "./style.css"
import Icon from "@ant-design/icons/lib/components/Icon";
import DiaryDisplay from "../components/DiaryDisplay";
import DiaryInput from "../components/DiaryInput";
import { CallGPT } from "../api/gpts";
import { Input, Button, message } from "antd";
import React, { useState } from "react";
import RefIcon from "@ant-design/icons/lib/icons/CommentOutlined";
import { SendOutlined } from "@ant-design/icons";

export default function lemon({messageApi, onSubmit}) {
    const [message, setMessage] = useState("");
    
    const handleClickAPICall = async (userInput) => {
        try {
          setIsLoading(true);
          const message = await CallGPT({
            prompt: `${userInput}`,
          });
          setData(JSON.parse(message));
        } catch (error) {
          messageApi.open({
            type: "error",
            content: error?.message,
          });
          return;
        } finally {
          setIsLoading(false);
        }
    };
    
    const handleSubmit = () => {
        console.log(message);
        const form = {
            test: message,
        }
    }

    const handleChange = (e) => setMessage(e.target.value);
    
    return (
    <div>
        <header>
            <div className="header">Lemonview chat</div>
        </header>
        <div>
            <div className="message-form">
                <input 
                    className="message-form-input"
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="메세지를 입력하세요"
                />
            </div>
            <div className="message-send">
                <Button onClick={handleSubmit}>보내기</Button>
            </div>
        </div>
    </div>
    )
}