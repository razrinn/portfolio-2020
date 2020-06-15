import React from "react";
import { ProfileContainer, SocialIcon } from "./styles";
import { Box, Link, TitleText, SubtitleText } from "../../styles";
import Github from "../../../../media/github.svg";
import Twitter from "../../../../media/twitter.svg";
import Instagram from "../../../../media/instagram.svg";
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
                        <SocialIcon src={Github} alt="github" /> Github.{" "}
                    </Link>
                    <Link
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialIcon src={Twitter} alt="twitter" /> Twitter.{" "}
                    </Link>
                    <Link
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialIcon src={Instagram} alt="instagram" />{" "}
                        Instagram.{" "}
                    </Link>
                </SubtitleText>
            </Box>
        </ProfileContainer>
    );
}

export default ProfileSection;
