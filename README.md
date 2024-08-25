
# 심리상담사 GPT, AI 회고록
React + GPT API로 AI회고록 서비스 개발
- 최종결과: http://mate33.dothome.co.kr/ </br>

![스크린샷 2023-12-06 오후 4 11 52](https://github.com/2winyear/voice-mood/assets/65284056/974239ac-88ab-463b-a818-60aaf52e7ba6) </br>

문제 : SNS/블로그에 회고록을 쓰고 싶지만, 사람들은 글쓰는 것이 어렵고 회고를 귀찮아 한다. </br>
가설 : GPT의 도움으로 자동으로 글을 써주고, 심리적인 분석과 액션리스트를 제공하면 퀄리티 있는 포스팅과 회고를 통한 성장 가능. </br>
해결 방법 : Web Application을 통해 사용자가 간단한 문구를 입력하면 회고록을 써주는 AI 서비스 개발 </br>

### 분석결과 페이지

![스크린샷 2023-12-06 오후 4 12 36](https://github.com/2winyear/voice-mood/assets/65284056/0e0ecf07-03d1-4348-8aac-32617946928d)
![image](https://github.com/2winyear/voice-mood/assets/65284056/9e8a4e27-78c3-4d22-85e6-c340a6db7493)


.env 파일
```
VITE_GPT_API_KEY=
```


개발과정 :

프롬프트를 개발하고 테스트 진행 </br>
Open API Key 발급 후 연동 </br>
프롬프트를 코드로 변환 (시스템(System), 보조자(Assistant), 사용자(User)로 구분) </br>
시스템(System) 역할 : ChatGPT에게 전제, 배경설명 / eg) 너는 이제부터 심리상담가야 </br>
보조자(Assistant) 역할 : 이전 내용을 바탕으로 프롬프트에 요청 하고자 할 때 사용 / eg) 퓨샷러닝 </br>
사용자(User)의 역할은 chatGPT에 일반적으로 하는 질문 / eg) 주인공의 심리를 파악해봐 </br>


# 소스코드 실행방법
npm run dev

# Task

- [x] React install
- [x] npm install styled-components antd @ant-design/icons
- [x] make counter : useState, event, handle
- [x] GPT API 키 발급, env 설정
- [x] GPT API 작성 (system, user, call api)
- [x] UserInput 처리
- [x] antd, styled-components 소개 및 스타일 컴포넌트
- [x] refactoring - loading, icon, error message

# prompt

```
## INFO ##
you can add images to the reply by URL, Write the image in JSON field 
Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##


You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.

1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
2. [summarize] : summarize events in order with one line sentence.
3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
4. [evaluates] : The written emotional [evaluates], using explore the unconscious based on the contents of the [emotional diary].
6. [Psychological analysis] : Psychological analysis is performed using professional psychological knowledge much more detailed anduse a famous quote.
7. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must beconverted into JSON Array format.
8. [image] : Create an image by making the contents so far into one keyword.


Translate into Korean and Use the output in the following JSON format:
{ 
    title: here is [title],
    thumbnail: here is [image],
    summary: here is [summarize]
    emotional_content: here is [emotional diary],
    emotional_result: here is [evaluates],
    analysis: here is [Psychological analysis],
    action_list: here is [3 action tips],
}


[events]: 
"""
코딩 강의를 들었다. 프로젝트에 버그가 많이 나왔음. 스택오버플로에서 검색했지만 해결 안되었어.
역시 gpt를 통해서 해결했다. 근데 이렇게 해결하는게 개발실력에 도움 될까..?
"""
```

# 이후에 할 일

- 01.scripts : 150개 파일, 1개 파일당 3개의 스크립트 
- 02.records : 1개의 스크립트당 3개의 녹음파일 
- 03.json : 450개 .json


# Resource
- [Figma](https://www.figma.com/file/lHkUiV3ETbn1bpoX7UK6Td/%EB%B0%94%EA%B5%AC%EB%AF%B8's-team-library?type=design&node-id=0%3A1&mode=design&t=Hiw8I5EH82edgKWw-1)
