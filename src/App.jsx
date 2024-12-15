import React from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./style";
import my from "./assets/my.svg";
import setting from "./assets/setting.svg";
import send from "./assets/send.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Layout>
        <S.SideBar>
          <S.SideBar_Content>
            <S.SideBar_Title>JIWOOCHAT_AI</S.SideBar_Title>
            <S.SideBar_NewChat>
              <S.SideBar_NewChat_Text>+ New Chat</S.SideBar_NewChat_Text>
            </S.SideBar_NewChat>
            <S.SideBar_Line />
            <S.SideBar_Line2 />
            <S.SideBar_Setting>
              <S.SideBar_Circle>
                <S.SideBar_Image src={setting} alt="setting" />
              </S.SideBar_Circle>
              <S.SideBar_Setting_Text>Settings</S.SideBar_Setting_Text>
            </S.SideBar_Setting>
            <S.SideBar_Profile>
              <S.SideBar_Circle>
                <S.SideBar_Image src={my} alt="profile" />
              </S.SideBar_Circle>
              <S.SideBar_Setting_Text>Lee jiwoo</S.SideBar_Setting_Text>
            </S.SideBar_Profile>
          </S.SideBar_Content>
        </S.SideBar>
        <S.Chat>
          <S.Chat_Circle>
            <S.Chat_Image src={send} alt="send" />
          </S.Chat_Circle>
        </S.Chat>
      </S.Layout>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }`;

export default App;
