import { Button, Form, Input, Radio, Select } from "antd";
import { CardContainer } from "./CommonStyles";
import "./style.css"
import { styled } from "styled-components";
import woman from "../assets/face_3.png";
import man from "../assets/face_6.png";
import down from "../assets/keyboard_double_arrow_down.png"


const DiaryPersonal = () => {
    

    return (
    <div>
        <div className="start">
        30초 만에 간단 심리 검사 시작하기
        <img className="down" src={down}/>
        </div>
        <div className="form">
            <div className="sex">
                성별 <br></br>
                <Button className="inputPersonBtn"><img src={man} />남성</Button>
                <Button className="inputPersonBtn"><img src={woman} />여성</Button>
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
                닉네임 <br></br>
                <Input className="nicknameBtn"/>
            </div>
        </div>
        <div className="warning">
        * 너의 목소리가 들려는 개인정보를 받지 않습니다.<br></br>
        성별과 연령대별만 입력 받습니다.
        </div>
    </div>
    )
}

export default DiaryPersonal;

