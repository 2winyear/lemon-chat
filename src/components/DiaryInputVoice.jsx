import { CardContainer } from "./CommonStyles";
import article from "../assets/article.png";
import { useState } from "react";
import DiaryExample from "./DiaryExample";
import { Button } from "antd";
import { useSpeechRecognition } from 'react-speech-kit';
import keyboardVoice from "../assets/keyboard_voice.png";
// import { ReactComponent as Article } from '../assets/article.svg'; //이게 왜 에러인지 모르겠음



const DiaryInputVoice = ({ isLoading, onSubmit, messageApi }) => {
    const [sampleMessage, setSampleMessage] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [recording, setRecording] = useState(false);

    const {listen, listening, stop} = useSpeechRecognition({
        onResult: (result) => {
            setUserInput(result);
        },
    });

    const handleSampleExample = () => {
        if(!sampleMessage) {
            setSampleMessage(true);
        } else {
            setSampleMessage(false);
        }
    }

    const startRecording = () => {
        setRecording(true);
        listen(); //녹음중
    };
    
    const stopRecording = async () => {
        setRecording(false);
        stop(); // 녹음종료
    };
    
    const analyzeEmotion = async () => {
        // if(!UserInput) {
        //     messageApi.open({
        //     type: "error",
        //     content: "일과를 적어주세요.",
        // });
        // return;
        onSubmit(userInput);
        setUserInput(null);
    }

    return (
    <div>
        <CardContainer>
        스마트폰의 녹음 버튼을 클릭하고 오늘 하고 싶은 이야기를 30초 내외로 녹음해주세요<br></br>
        (단, 하고싶은 이야기가 없으면 샘플예시를 클릭하세요)
        </CardContainer>
            {/* <Button icon={<article />}></Button> */}
            <button className="sampleExampleBtn" onClick={handleSampleExample}>
                <img className="article" src={article}></img>
                샘플 예시 보기
            </button>
        {sampleMessage ? <DiaryExample /> : null}
        {listening && <div>음성인식 활성화 중</div>}
        <div>
            <strong>텍스트:</strong> {userInput}
        </div>
        <buttonContainer className="voice">
            <Button onClick={analyzeEmotion}>
                ⏏️분석
            </Button>
            <Button className="recordingBtn" onClick={startRecording} disabled={recording}>
                <img src={keyboardVoice}/>
            </Button>
            <Button onClick={stopRecording} disabled={!recording}>
                ⏺️멈춤
            </Button>
        </buttonContainer>
    </div>
    )
}

export default DiaryInputVoice;