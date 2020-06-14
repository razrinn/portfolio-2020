import React from "react";
import { Root, Container } from "./styles";
import ProfileSection from "./section/ProfileSection";
import WorkSection from "./section/WorkSection";

function IndexView() {
    return (
        <Root>
            <Container>
                <ProfileSection />
                <WorkSection />
            </Container>
        </Root>
    );
}

export default IndexView;
