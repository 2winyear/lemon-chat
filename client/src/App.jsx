import { useState } from "react";
import { CallGPT } from "./api/gpts";
import DiaryInput from "./components/DiaryInput";
import styled from "styled-components";
import logo from "./assets/logo.png";
import DiaryDisplay from "./components/DiaryDisplay";
import { Button, Switch, message } from "antd";
import DiaryPersonal from "./components/DiaryPersonal";
import DiaryInputVoice from "./components/DiaryInputVoice";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import ErrorPage from './routes/ErrorPage.jsx';
import Personals from './routes/Personals.jsx';
import Root from './routes/Root.jsx';
import First from './routes/First.jsx';
import Chat from './routes/Chat.jsx';
import Text from './routes/Text.jsx'
import Login from "./components/Login.jsx";
// import { useNavigate } from "react-router-dom";
// import language from "./pages/Language";


function App() {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);

  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />}/> */}
          <Route path="/" element={<First />}/>
          <Route path="/personals" element={<Personals />}/>
          <Route path="/chat" element={<Chat/>} />
          {/* <Route path="/chat" element={isAuth ? <Chat user={user} secret={secret}/> : <Navigate to="/login"/>} /> */}
          {/* <Route path="/login" element={isAuth? (<Navigate to="/chat" />) : <Login setUser={setUser} setSecret={setSecret}/>} /> */}
          <Route path="/text" element={<Text />}/>
          {/* <RouterProvider router={router} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;

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
