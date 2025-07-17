import React from "react";
import styled from "styled-components";
import yonseiLogo from "./yonsei-logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const Logo = styled.img`
  width: 200px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const FindPassword = styled.p`
  margin-top: 10px;
  font-size: 0.85rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={yonseiLogo} alt="Yonsei Logo" />
                <Form>
                    <Title>로그인</Title>
                    <Label htmlFor="username">아이디</Label>
                    <Input type="text" placeholder="아이디 입력(4~20자)" />

                    <Label htmlFor="password">비밀번호</Label>
                    <Input type="password" placeholder="비밀번호 입력(8~20자)" />

                    <Button>로그인 하기</Button>

                    <FindPassword>
                        비밀번호를 잊으셨습니까?
                        <a href="#4169E1">비밀번호 찾으러 가기</a>
                    </FindPassword>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default LoginPage;
