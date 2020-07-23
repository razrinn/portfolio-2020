import styled from "styled-components";
import { primaryBlue, primaryBlack, primaryWhite } from "../../utils/constants";

export const Root = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${primaryBlack};
  min-height: 100vh;

  & p,
  div {
    color: ${primaryWhite};
    font-family: "Open Sans";
  }

  & p {
    width: 100%;
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0 20%;

  @media only screen and (max-width: 768px) {
    padding: 0 5%;
  }

  @media only screen and (max-width: 1280px) {
    padding: 0 10%;
  }
`;

export const Spacer = styled.div``;

export const Box = styled.div`
  border-radius: 8px;
  box-shadow: -4px -4px 8px rgba(40, 40, 40, 0.5),
    4px 4px 8px rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 1.25rem 2.5rem;
  @media only screen and (max-width: 768px) {
    padding: 0.625 1.25rem;
    width: 85%;
  }
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${primaryBlue},
    ${primaryBlue} 50%,
    white 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 0.275s ease;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:hover {
    text-decoration: underline;
    color: ${primaryBlue};
    background-position: 0 100%;
  }
`;

export const TitleText = styled.h1`
  color: ${primaryBlue};
  font-family: "Proza Libre";
  width: 100%;
  font-weight: bold;
  font-size: 4rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubtitleText = styled.h2`
  width: 100%;
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const EmailButton = styled.a`
  text-decoration: none;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  padding: 0.5rem 2.5rem;
  background-color: ${primaryWhite};
  color: ${primaryBlue};
  font-family: "Open Sans";
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  > span {
    margin-right: 0.5em;
  }
  > img {
    width: 1em;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    border-radius: 50%;
    > span {
      display: none;
    }
    > img {
      width: 2em;
    }
  }
`;
