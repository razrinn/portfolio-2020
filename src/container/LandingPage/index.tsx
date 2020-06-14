import React from "react";
import { Root, Container, EmailButton } from "./styles";
import ProfileSection from "./section/ProfileSection";
import WorkSection from "./section/WorkSection";

function IndexView() {
    return (
        <Root>
            <Container>
                <ProfileSection />
                <WorkSection />
            </Container>
            <EmailButton href="mailto:rayazrin19@gmail.com">
                Email Me
            </EmailButton>
        </Root>
    );
}

export default IndexView;
