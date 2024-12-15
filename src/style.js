import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f1f2;
  display: flex;
  align-items: center;
`;

// SideBar 영역
export const SideBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 2.5%;
  width: 20%;
  height: 95%;
  background-color: white;
  border-radius: 20px;
`;

export const SideBar_Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  left: 10%;
  top: 5%;
`;

export const SideBar_Title = styled.p`
  position: relative;
  font-size: 28px;
  font-weight: 600;
`;

export const SideBar_NewChat = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 6.5%;
  top: 3%;
  background-color: #5661f6;
  border-radius: 69px;
`;

export const SideBar_NewChat_Text = styled.p`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export const SideBar_Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  top: 7%;
  background-color: #efefef;
`;
export const SideBar_Line2 = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  top: 60%;
  background-color: #efefef;
`;

export const SideBar_Setting = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 80%;
  height: 6.5%;
  top: 63.5%;
  border: 1px solid #d9d9d9;
  border-radius: 69px;
`;

export const SideBar_Circle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 3%;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #d9d9d9;
`;

export const SideBar_Image = styled.img`
  width: 20px;
  height: 20px;
`;

export const SideBar_Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 80%;
  height: 6.5%;
  top: 65%;
  border: 1px solid #d9d9d9;
  border-radius: 69px;
`;

export const SideBar_Setting_Text = styled.p`
  position: relative;
  left: 8%;
  font-size: 18px;
  font-weight: 500;
`;

export const Chat = styled.div`
  position: relative;
  left: 40%;
  top: 40%;
  width: 747px;
  height: 62px;
  background-color: white;
  border-radius: 69px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;
