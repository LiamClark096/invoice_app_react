import React from "react";
import styled from "styled-components";
import getFirebase from "../../firebase";

const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 10px;
  border-left: 1px solid #494e6e;

  @media (min-width: 960px) {
    flex-direction: column;
    width: 100%;
    border-left: none;
    border-top: 1px solid #494e6e;
  }
`;
const SignOutIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SignOutButton = () => {
  const firebaseInstance = getFirebase();

  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <SignOutContainer onClick={() => signOut()}>
      <SignOutIcon src={"./assets/box-arrow-in-right.svg"} />
    </SignOutContainer>
  );
};

export default SignOutButton;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #000;
  text-align: center;
`;

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
