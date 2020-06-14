import React from "react";
import {
    WorkContainer,
    Wrapper,
    WorksWrapper,
    WorkDescriptionWrapper,
    WorkItem,
    WorkImage,
    WorkTitle,
    WorkDescriptionTitle,
    WorkDescriptionText,
    PaginationWrapper,
    Pagination,
} from "./styles";
import { SubtitleText } from "../../styles";
import { PORTFOLIOS } from "../../../../hooks/dummy";
function WorkSection() {
    const [active, setActive] = React.useState(10);
    const [page, setPage] = React.useState(0);
    const data = PORTFOLIOS;
    const handleClickPrev = () => {
        setActive(data[(page - 1) * 4].id);
        setPage(page - 1);
    };
    const handleClickNext = () => {
        setActive(data[(page + 1) * 4].id);

        setPage(page + 1);
    };
    return (
        <WorkContainer>
            <SubtitleText>MY WORKS</SubtitleText>
            <Wrapper>
                <WorksWrapper>
                    <Wrapper>
                        {data
                            .slice(4 * page, 4 * page + 4)
                            .map(({ id, title, image }, i) => (
                                <WorkItem
                                    key={id}
                                    onClick={(e) => setActive(id)}
                                >
                                    <WorkImage src={image} />
                                    <WorkTitle>{title}</WorkTitle>
                                </WorkItem>
                            ))}
                    </Wrapper>
                    <PaginationWrapper>
                        <Pagination
                            onClick={handleClickPrev}
                            disabled={page === 0}
                        >
                            Previous
                        </Pagination>
                        <Pagination
                            onClick={handleClickNext}
                            disabled={page === Math.floor(data.length / 4)}
                        >
                            Next
                        </Pagination>
                    </PaginationWrapper>
                </WorksWrapper>
                <WorkDescriptionWrapper>
                    <WorkDescriptionTitle>
                        {data.find((x) => x.id === active)?.title}
                    </WorkDescriptionTitle>
                    <WorkDescriptionText>
                        {data.find((x) => x.id === active)?.description}
                    </WorkDescriptionText>
                </WorkDescriptionWrapper>
            </Wrapper>
        </WorkContainer>
    );
}

export default WorkSection;
