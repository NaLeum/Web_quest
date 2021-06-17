import styled from "styled-components";
import MainHeaderItemContainer from "../../../containers/main/header/MainHeaderItemContainer";

const HeaderRow = styled.header`
    width: 414px;
    height: 50px;
    position: fixed;
    padding: 16px 10px 0 10px;
    background-color: #ffffff;
`;
const HeaderList = styled.ul`
    display: flex;    
`;
const HeaderItem = styled.li`
    width: 100px;
    height: 34px;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: ${(props)=> (props.isCommunitySchool === props.value) ? "3px solid purple" : "3px solid #ffffff"};
    color: ${(props)=> (props.isCommunitySchool === props.value) ? "black" : "gray"};
`;

const MainHeader = ({isCommunitySchool,setIsCommunitySchool,setCommunityIdx}) => {
    return(
        <HeaderRow>
            <HeaderList>
                <MainHeaderItemContainer
                    isCommunitySchool={isCommunitySchool}
                    value={0}
                    setIsCommunitySchool={setIsCommunitySchool}
                    setCommunityIdx={setCommunityIdx}
                >
                    모든 학교
                </MainHeaderItemContainer>
                <MainHeaderItemContainer
                    isCommunitySchool={isCommunitySchool}
                    value={1}
                    setIsCommunitySchool={setIsCommunitySchool}
                    setCommunityIdx={setCommunityIdx}
                >
                    우리 학교
                </MainHeaderItemContainer>
            </HeaderList>
        </HeaderRow>
    )
}

export default MainHeader;