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
