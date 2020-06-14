import styled from "styled-components";
export const WorkContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
`;

export const WorksWrapper = styled.div`
    flex: 2 2 0;
    width: 66.666666%;
`;

export const WorkDescriptionWrapper = styled.div`
    flex: 1 1 0;
    width: 33.333333%;
`;
export const WorkItem = styled.div`
    flex: 0 0 40%;
    max-width: 40%;
    /* min-width: 33.333333%; */
    border-radius: 8px;
    box-shadow: -4px -4px 8px rgba(40, 40, 40, 0.5),
        4px 4px 8px rgba(0, 0, 0, 0.5);
    padding: 0.25rem 0.5rem;
    margin: 0.625rem;
    @media only screen and (max-width: 768px) {
        padding: 0.25 0.5rem;
    }
    cursor: pointer;
`;

export const WorkImage = styled.img`
    width: 100%;
`;

export const WorkTitle = styled.p`
    text-align: center;
`;

export const WorkDescriptionTitle = styled.p`
    text-align: center;
    font-weight: bold;
`;

export const WorkDescriptionText = styled.p``;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
`;

export const Pagination = styled.button`
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    box-shadow: -4px -4px 8px rgba(40, 40, 40, 0.5),
        4px 4px 8px rgba(0, 0, 0, 0.5);

    &:nth-child(1) {
        margin-right: 1.25rem;
    }

    &:disabled {
        color: #888888;
        cursor: default;
        background-color: #333333;
        box-shadow: -4px -4px 8px rgba(50, 50, 50, 0.5),
            4px 4px 8px rgba(15, 15, 15, 0.5);
    }
`;
