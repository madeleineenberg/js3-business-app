import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { GridBox } from "../styled/Grid";
import { SubTitle, Paragraph, Span, CustomerInfo } from "../styled/Heading";
import { TextWrapper, FlexContainer, Image } from "../styled/Container";

export default function UserInfo() {
  const { onlineUser, setOnlineUser, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    setOnlineUser(getUserInfo()); // eslint-disable-next-line
  }, []);
  return (
    <>
      {onlineUser && (
        <GridBox column="1 / 5" row="1 / 2">
          <SubTitle color="peachpuff">
            User Details{" "}
            <CustomerInfo>Welcome, {onlineUser.firstName}</CustomerInfo>
          </SubTitle>
          <FlexContainer>
            <TextWrapper>
              <Paragraph>
                <Span color="peachpuff">Name:</Span> {onlineUser.firstName}{" "}
                {onlineUser.lastName}
              </Paragraph>

              <Paragraph>
                <Span color="peachpuff">Email:</Span> {onlineUser.email}
              </Paragraph>
            </TextWrapper>

            <Image src={require("../icons/1x/user.png")} alt="usericon" />
          </FlexContainer>
        </GridBox>
      )}
    </>
  );
}
