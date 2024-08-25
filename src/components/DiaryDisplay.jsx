import {
  DiaryContainer,
  ResultTitle,
  Divider,
  CardContainer,
  CardTitle,
  CardContent,
  ActionListItem,
} from "./CommonStyles";

import {
  LoadingOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  MessageTwoTone,
  SoundTwoTone,
} from "@ant-design/icons";
import { Card, Image } from "antd";
import styled from "styled-components";
import excited from "../assets/sentiment_excited.png"
import dissatisfied from "../assets/sentiment_extremely_dissatisfied.png"
import frustrated from "../assets/sentiment_frustrated.png"
import neutral from "../assets/sentiment_neutral.png"
import satisfied from "../assets/sentiment_satisfied.png"

const ThumbnailImage = styled(Image)`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const DiaryDisplay = ({ data, isLoading }) => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  return (
    <DiaryContainer>
      {isLoading && (
        <>
          불러오는중...
          <LoadingOutlined />
        </>
      )}
      <ResultTitle>{data.title}</ResultTitle>

      <Divider />
      <CardContainer>
        <CardTitle>
          <CheckCircleTwoTone
            twoToneColor="#FF9AA2"
            style={{ marginRight: "6px" }}
          />
          요약
        </CardTitle>
        <CardContent>{data.summary}</CardContent>
      </CardContainer>

      <ThumbnailImage src={data.thumbnail} alt="Thumbnail" />
      <Divider />
      <CardContainer className="scoreCard">
        <div className="scoreTitle"><img src={satisfied} /> 기쁨지수</div>
        <div className="score">현재 {getRandom(3,10)}점 </div>
        <div className="averScore">평균 8점</div>
      </CardContainer>
      <CardContainer className="scoreCard">
        <div className="scoreTitle"><img src={excited} /> 행복지수</div>
        <div className="score">현재 {getRandom(3,10)}점 </div>
        <div className="averScore">평균 7점</div>
      </CardContainer>
      <CardContainer className="scoreCard">
        <div className="scoreTitle"><img src={neutral} /> 중립지수</div>
        <div className="score">현재 {getRandom(1,10)}점 </div>
        <div className="averScore">평균 6점</div>
      </CardContainer>
      <CardContainer className="scoreCard">
        <div className="scoreTitle"><img src={frustrated} /> 우울지수</div>
        <div className="score">현재 {getRandom(2,10)}점 </div>
        <div className="averScore">평균 7점</div>
      </CardContainer>
      <CardContainer className="scoreCard">
        <div className="scoreTitle"><img src={dissatisfied} /> 화남지수</div>
        <div className="score">현재 {getRandom(1,10)}점 </div>
        <div className="averScore">평균 8점</div>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <HeartTwoTone twoToneColor="#FFB7B2" style={{ marginRight: "6px" }} />
          감성일기장
        </CardTitle>
        <CardContent>{data.emotional_content}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <SmileTwoTone twoToneColor="#FFDAC1" style={{ marginRight: "6px" }} />
          내가 느낀 감정
        </CardTitle>
        <CardContent>{data.emotional_result}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <MessageTwoTone
            twoToneColor={"#B5EAD7"}
            style={{ marginRight: "6px" }}
          />
          심리 분석
        </CardTitle>
        <CardContent>{data.analysis}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <SoundTwoTone twoToneColor="#C7CEEA" style={{ marginRight: "6px" }} />
          GPT 조언
        </CardTitle>
        <CardContent>
          {data.action_list.map((action, index) => (
            <ActionListItem key={index}>{action}</ActionListItem>
          ))}
          {/* <ActionListItem>{data.action_list[0]}</ActionListItem>
          <ActionListItem>{data.action_list[1]}</ActionListItem>
          <ActionListItem>{data.action_list[2]}</ActionListItem> */}
        </CardContent>
      </CardContainer>
      <div className="warning">
        * 해당 결과물은 절대적인 값이 아니니 참고만 하시기 바랍니다.
      </div>
    </DiaryContainer>
  );
};

export default DiaryDisplay;
