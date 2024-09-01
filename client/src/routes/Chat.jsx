import React from "react";
import { useNavigate } from "react-router-dom";
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow} from "react-chat-engine-advanced";
// import { ChatList, ChatFeed, ChatFeedProps } from "react-chat-engine-advanced";
import StandardMessageForm from "../components/custonMessageForms/StandardMessageForm";
import "./style.css";
import Back from "../assets/ic_back.png";
import Ai from "../components/custonMessageForms/Ai.jsx";

export default function Chat() {
    const chatProps = useMultiChatLogic(
        "0f5d3a06-8257-4e8c-9f7c-48549a1c86a7",
        "testuser",
        "asdf1234"
    )

    // isMobileChatSettingsOpen
    const navigate = useNavigate();

    const modifiedChatProps = {
        ...chatProps,
        isMobileChatListOpen: false,
        isMobileChatSettingsOpen: false,
        
    };

    return (
        <div style={{flexBasis: "100%"}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow
                {...modifiedChatProps}
                style={{height:"100vh"}}
                // renderChatFeed={(chatAppState)=>{}}
                // renderChatList={()=>null}
                // renderChatSettings={() => null}
                renderChatHeader={(props) => (
                    <div className="Header">
                        <img
                            onClick={() => navigate("/personals")}
                            src={Back} 
                            className="header-back-icon"/>Lemonview Chat
                    </div> 
                )}
                renderMessageForm={(props) => {
                    if (chatProps.chat?.title.startsWith("AiChat_")) {
                        return <Ai props={props} activeChat={chatProps.chat} />
                    }
                    if (chatProps.chat?.title.startsWith("AiCode_")) {
                        return <Ai props={props} activeChat={chatProps.chat} />
                    }
                    return (
                        <StandardMessageForm props={props} activeChat={chatProps.chat} />
                    )
                }}
            />
        </div>
    )
}