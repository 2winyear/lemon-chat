import { useState } from "react";
import { CallGPT } from "../api/gpts";
import DiaryInput from "../components/DiaryInput";
import styled from "styled-components";
import DiaryDisplay from "../components/DiaryDisplay";
import { Button, Switch, message } from "antd";
import DiaryPersonal from "../components/DiaryPersonal";
import DiaryInputVoice from "../components/DiaryInputVoice";
import "../App.css";
import Robot from "../assets/mainRobot_edit.png";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./style.css";


function First() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

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

  const handleSubmit = (userInput) => {
    handleClickAPICall(userInput);
  };

  const popUp = () => {

  }

  return (
    <div className="appContainer">
      <div className="subtitle">
        AI Chat for
      </div>
      
      <AppTitle>
        Beauty & Emotion
      </AppTitle>
      <br></br>
      
      <img className="Robot" src={Robot} width={300} height={500}></img>
      <br></br>

      <Link to="/personals">
        <Button className="enter">Lemonview Chat 1.0</Button>
      </Link>
      <br></br>
      
      <div className="first-label">
          <input className="checkbox" type="checkbox" defaultChecked={true}></input>
          <div className="checkbox-text" onClick={popUp}>
            <Link to="/text">개인정보 처리방침에 동의합니다.</Link>
          </div>
      </div>
    </div>
  );
}

export default First;

const AppConatiner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;


const AppTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 35px;
  text-align: ;
  font-family: "Apple SD Gothic Neo";
  text-shadow: 2px 2px 5px gray;
`;

