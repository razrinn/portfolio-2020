import React from "react";
import { Root, Container, EmailButton } from "./styles";
import ProfileSection from "./section/ProfileSection";
import WorkSection from "./section/WorkSection";
import Mail from "../../media/mail.svg";

function IndexView() {
  return (
    <Root>
      <Container>
        <ProfileSection />
        <WorkSection />
      </Container>
      <EmailButton href="mailto:rayazrin19@gmail.com">
        <span>Email Me</span> <img src={Mail} alt="mail" />
      </EmailButton>
    </Root>
  );
}

export default IndexView;
