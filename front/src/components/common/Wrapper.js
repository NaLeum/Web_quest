import styled from "styled-components";

const PageWrapper = styled.section`
padding: 10px;
padding-top: 30px;
`;

const Wrapper = ({children}) => {
    return(
        <PageWrapper>
            {children}
        </PageWrapper>
    )
}

export default Wrapper;