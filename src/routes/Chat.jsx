import React from "react";
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import StandardMessageForm from "../components/custonMessageForms/StandardMessageForm";

export default function Chat() {
    const chatProps = useMultiChatLogic(
        "0f5d3a06-8257-4e8c-9f7c-48549a1c86a7",
        "testuser",
        "asdf1234"
    )

    return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
            {...chatProps}
            style={{height:"100vh"}}
            renderChatHeader={(chat) => <header chat={chat}/>}
            renderMessageForm={(props) => {
                return(
                    <StandardMessageForm props={props} activeChat={chatProps.chat} />
                )
            }}
        />
    </div>
    )
}