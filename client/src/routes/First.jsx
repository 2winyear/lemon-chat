import { useState } from "react";
import { CallGPT } from "../api/gpts";
import DiaryInput from "../components/DiaryInput";
import styled from "styled-components";
import DiaryDisplay from "../components/DiaryDisplay";
import { Button, Switch, message } from "antd";
import DiaryPersonal from "../components/DiaryPersonal";
import DiaryInputVoice from "../components/DiaryInputVoice";
import "../App.css";
import Robot from "../assets/mainRobot.png";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./style.css";


const dummyData = JSON.parse(
  `{ 
    "title": "개발 고민과 해결", 
    "thumbnail": "https://source.unsplash.com/1600x900/?coding", 
    "summary": "코딩 강의를 듣고 프로젝트에 버그가 발생했지만 해결하지 못하여 GPT를 통해 문제를 해결했음", 
    "emotional_content": "오늘 코딩 강의를 들었는데, 프로젝트에 버그가 많이 나왔어. 스택오버플로에서 검색해봤지만 해결되지 않았어. 그래서 결국 GPT를 통해서 문제를 해결하게 되었어. 하지만 이렇게 해결하는 것이 내 개발 실력에 도움이 될까 고민이 되는군.", 
    "emotional_result": "이번 상황을 통해 내가 프로그래밍에 대해 더 배울 필요가 있음을 느꼈다. 버그를 해결하는 데에만 의존하는 것보다 개념적으로 이해하고 해결하는 것이 더 중요하다는 것을 깨달았다.", 
    "analysis": "이번 상황은 개발자로서 성장하는 과정에서 마주치는 문제였다. 알고리즘과 문제 해결 능력은 중요하지만, 개념적인 이해와 전체적인 시스템 구조 파악이 더 중요하다는 것을 알 수 있었다. '지식은 힘이다'라는 명언을 생각해보면, 기술적인 도움을 받는 것도 중요하지만 개념적인 이해와 학습은 더 큰 힘이 될 것이다.", 
    "action_list": ["더 깊은 개념적 이해를 위해 관련 서적을 읽어보기", "다른 개발자들과 소통하여 문제 해결 방법 나누기", "개발자 커뮤니티에 참여하여 지식을 공유하기"] }`
);

function First() {
  const [data, setData] = useState(dummyData);
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

  return (
    <div className="appContainer">
      <div className="subtitle">
        AI Chat for
      </div>
      
      <AppTitle>
        Beauty & Emotion
      </AppTitle>
      <br></br>
      
      <img className="Robot" src={Robot} width={230} height={220}></img>
      <br></br>

      <Link to="/personals">
        <Button className="enter">Lemonview Chat 1.0</Button>
      </Link>
      <br></br>
      
      <div className="first-label">
        <label>
            <input className="checkbox" type="checkbox" defaultChecked={true}></input> 개인정보 처리방침에 동의합니다.
        </label>
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

