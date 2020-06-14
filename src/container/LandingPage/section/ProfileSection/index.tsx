import React from "react";
import { ProfileContainer } from "./styles";
import { Box, Link, TitleText, SubtitleText } from "../../styles";
function ProfileSection() {
    return (
        <ProfileContainer>
            <SubtitleText>HELLO, I'M</SubtitleText>
            <Box>
                <TitleText>Ray Azrin Karim</TitleText>
                <SubtitleText>Student. Software Engineer.</SubtitleText>
                <SubtitleText>Jakarta, Indonesia.</SubtitleText>
                <SubtitleText>
                    <Link
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github.{" "}
                    </Link>
                    <Link
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter.{" "}
                    </Link>
                    <Link
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram.{" "}
                    </Link>
                </SubtitleText>
            </Box>
        </ProfileContainer>
    );
}

export default ProfileSection;
