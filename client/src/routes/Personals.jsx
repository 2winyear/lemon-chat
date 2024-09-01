import React, { useState } from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import "./style.css"
import { styled } from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import languageBtn from "../assets/ic_language.png";

export default function Personals () {
    const [selectedGender, setSelectedGender] = useState(null); // 성별 상태 관리
    const [isGrayBackGround, setIsGrayBackGround] = useState(false);

    const handleGenderClick = (gender) => {
        setSelectedGender(gender); // 선택된 성별 업데이트
    };
    
    const toggleBackGroundColor=()=> {
        setIsGrayBackGround(!isGrayBackGround);
    }

    return (
            <div className="personals-show">
                <Button className="language-btn" onClick={toggleBackGroundColor}>
                    <img src={languageBtn} className="language-btn-icon"/>
                </Button>

                {/* { showGrayBox && (
                    <div className="gray-box">
                    
                    </div>
                )} */}

                <div className="form">
                    <div className="div-sex">성별</div>
                    <div className="sex">    
                        <Button
                            className={`inputPersonBtn ${selectedGender === 'male' ? 'selected' : ''}`}
                            onClick={() => handleGenderClick('male')}
                        >
                            남성
                        </Button>
                        <Button
                            className={`inputPersonBtn ${selectedGender === 'female' ? 'selected' : ''}`}
                            onClick={() => handleGenderClick('female')}
                        >
                            여성
                        </Button>
                    </div>
                    <div className="age">
                        연령대 <br></br>
                        <select className="ageBtn">
                            <option value="default" className="ageDefault">나이를 선택하세요</option>
                            <option value="10대">10대</option>
                            <option value="20대">20대</option>
                            <option value="30대">30대</option>
                            <option value="40대">40대</option>
                            <option value="50대">50대</option>
                        </select>
                    </div>
                    <div className="nick">
                        닉네임 <br/>
                        <Input className="nicknameBtn"/>
                    </div>
                    
                </div>
                <Link to="/chat"><Button className="personal-confirm">확인</Button></Link>
                <div className="personals-footer">
                    본 서비스는 얼굴을 위한 레몬뷰 AI 챗봇으로 <br/>
                    &nbsp;피부과 감정을 위한 AI 지원 서비스입니다.
                </div>
            </div>
    )
}

