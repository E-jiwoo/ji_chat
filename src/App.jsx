import React from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Layout>
        <S.SideBar></S.SideBar>
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
