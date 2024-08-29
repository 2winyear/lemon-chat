import { Button, Form, Input, Radio, Select } from "antd";
import "./style.css"
import { styled } from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";

export default function Personals () {
    return (
    <div>
        <div className="form">
            <div className="sex">
                성별 <br></br>
                <Button className="inputPersonBtn">남성</Button>
                <Button className="inputPersonBtn">여성</Button>
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
        <Button><Link to="/lemon">확인</Link></Button>
    </div>
    )
}

