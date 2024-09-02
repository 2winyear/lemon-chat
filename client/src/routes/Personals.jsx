import React, { useState } from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import "./style.css"
import { styled } from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import languageBtn from "../assets/ic_language.png";
import languageBtnCh from "../assets/ic_ch.png";
import languageBtnJp from "../assets/ic_jp.png";
import languageBtnKr from "../assets/ic_kr.png";
import languageBtnUS from "../assets/ic_us.png";

export default function Personals () {
    const [selectedGender, setSelectedGender] = useState(null); // 성별 상태 관리
    const [showGrayBox, setShowGrayBox] = useState(false);
    const [languageSelect, setlanguageSelect] = useState(false);

    const handleGenderClick = (gender) => {
        setSelectedGender(gender); // 선택된 성별 업데이트
    };
    
    const toggleGrayBox = () => {
        setShowGrayBox(!showGrayBox); // 회색 상자를 토글
    };

    const toggleLanguageSelect = () => {
        languageSelect(!languageSelect);
    }

    const languages = ['English', '한국어', '日本語', '漢文'];
    const languagesImg = [languageBtnUS, languageBtnKr, languageBtnJp, languageBtnCh];

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('test')
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i] !== checkThis) {
            checkboxes[i].checked = false
          }
        }
      }

    return (
        <div className="personals-show-wrap">
        <div className="personals-show">
            <div className="language-btn-wrap">
                <Button className="language-btn" onClick={toggleGrayBox}>
                    <img src={languageBtn} className="language-btn-icon"/>
                </Button>
            </div>
            {showGrayBox && (
                <div className="gray-box">
                </div>
            )}
            {showGrayBox && (
                <div className="language-choose">
                    <h3>언어</h3>
                    <ul>
                        {languages.map((language, index) => (
                            <StyledListItem key={index}>
                            <img src={languagesImg[index]} className="lanuage-icon"/>
                            {language}
                            <StyledInput
                                id="text"
                                type="checkbox"
                                name="test"
                                onChange={(e) => checkOnlyOne(e.target)}
                            />
                        </StyledListItem>
                        ))}
                    </ul>
                    <Link to="/chat"><Button className="personal-popup-confirm">확인</Button></Link>
                </div>
            )}



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
        </div>
    )
}

const StyledInput = styled.input`
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.8rem;
    margin-left: auto;
    &:checked {
        border-color: transparent;
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #FFDA44;
      }
`;


const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    user-select: none;
    margin-bottom: 10px;
`;
