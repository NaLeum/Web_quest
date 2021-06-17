import styled from "styled-components";

const TotalWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #E2DCFE;
`;
const TotalInner = styled.section`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    max-width: 414px;
    min-height: 100vh;
    margin: 0 auto;
`
const Wapper = ({children}) => {
    return(
        <TotalWrapper>
            <TotalInner>
                {children}
            </TotalInner>
        </TotalWrapper>
    )
}

export default Wapper;