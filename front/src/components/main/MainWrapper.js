import styled from "styled-components";

const MarginWrapper = styled.div`
    padding-top: 55px;
`;

const MainWrapper = ({children}) => {
    return (
        <MarginWrapper>{children}</MarginWrapper>
    );
}

export default MainWrapper;