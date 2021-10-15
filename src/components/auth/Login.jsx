import React from "react";
import styled from "styled-components";
import getFirebase from "../../firebase";
import useInput from "../utils/useInput";
import deer from "../../assets/deer.svg";
import "./Login.css"

const SignInForm = () => {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  const signIn = async (event) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        // alert("Welcome back!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AppContainer>
        <img src={deer} alt="" className="svg-color"/>
        <FormWrapper onSubmit={signIn}>
          <Title>Bejelentkezés</Title>
          <Input placeholder="Email" {...email} />
          <Input placeholder="Password" type="password" {...password} />
          <Button type="submit">Bejelentkezés</Button>
        </FormWrapper>
    </AppContainer>
  );
};

export default SignInForm;

const AppContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  display: flex;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.fontPriColor};
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.63px;
  margin-bottom: 5px;
  transition: color 0.2s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 48px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const FormWrapper = styled.form`
  display: grid;
  justify-content: center;
  gap: 20px;
  padding-bottom: 50px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  padding: 10px 20px;
  background-blend-mode: overlay;
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.4);

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
