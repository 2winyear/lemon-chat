import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow} from "react-chat-engine-advanced";
// import { ChatList, ChatFeed, ChatFeedProps } from "react-chat-engine-advanced";
import StandardMessageForm from "../components/custonMessageForms/StandardMessageForm";
import "./style.css";
import Back from "../assets/ic_back.png";
import Ai from "../components/custonMessageForms/Ai.jsx";

export default function Chat({user, secret}) {
    const chatProps = useMultiChatLogic(
        "0f5d3a06-8257-4e8c-9f7c-48549a1c86a7",
        "testuser",
        "asdf1234"
    )

    // isMobileChatSettingsOpen
    const navigate = useNavigate();

    const modifiedChatProps = {
        ...chatProps,
        // isMobileChatListOpen: false,
        // isMobileChatSettingsOpen: false,
        
    };

    // 사용자 추가 API 호출 함수
    const addUserToChat = async (chatId, usernameToAdd) => {
        try {
          const response = await fetch(`https://api.chatengine.io/chats/${chatId}/people/`, {
            method: "POST",
            headers: {
              "Project-ID": "0f5d3a06-8257-4e8c-9f7c-48549a1c86a7",
              "User-Name": user,
              "User-Secret": secret,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: "AI_bot-Beauty"
            })
          });
    
          if (response.ok) {
            console.log("User added to chat!");
          } else {
            console.error("Failed to add user to chat");
          }
        } catch (error) {
          console.error("Error adding user to chat:", error);
        }
      };
    
      // 채팅 가져오기
      const getMyChat = async () => {
        try {
          const response = await fetch(`https://api.chatengine.io/chats/`, {
            method: "GET",
            headers: {
              "Project-ID": "0f5d3a06-8257-4e8c-9f7c-48549a1c86a7",
              "User-Name": user,
              "User-Secret": secret
            }
          });
    
          if (response.ok) {
            const chatList = await response.json();
            // AiChat이 있는지 확인
            const aiChat = chatList.find(chat => chat.title.startsWith("AiChat_"));
            return aiChat;
          } else {
            console.error("Failed to get chat list");
            return null;
          }
        } catch (error) {
          console.error("Error getting chat list:", error);
          return null;
        }
      };
    
      // 채팅 생성
      const createChat = async () => {
        try {
          const response = await fetch(`https://api.chatengine.io/chats/`, {
            method: "POST",
            headers: {
              "Project-ID": "0f5d3a06-8257-4e8c-9f7c-48549a1c86a7",
              "User-Name": user,
              "User-Secret": secret,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: "AiChat_hi",
              is_direct_chat: false
            })
          });
    
          if (response.ok) {
            const newChat = await response.json();
            console.log("Chat created:", newChat);
            return newChat;
          } else {
            console.error("Failed to create chat");
          }
        } catch (error) {
          console.error("Error creating chat:", error);
        }
      };
    
    //   useEffect(() => {
    //     const initializeChat = async () => {
    //       // 채팅 존재 여부 확인
    //       const aiChat = await getMyChat();
    //       if (!aiChat) {
    //         // 채팅이 없으면 새로 생성
    //         const newChat = await createChat();
    //         if (newChat) {
    //           // 새로 생성된 채팅에 사용자 추가
    //           addUserToChat(newChat.id, "AI_bot-Beauty");
    //         }
    //       } else {
    //         // 기존 채팅이 있으면 해당 채팅에 사용자 추가
    //         addUserToChat(aiChat.id, "AI_bot-Beauty");
    //       }
    //     };
    
    //     initializeChat();
    //   }, []);

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