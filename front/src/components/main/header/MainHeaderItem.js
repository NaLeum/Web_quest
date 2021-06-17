import styled from "styled-components";

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
const MainHeaderItem = ({isCommunitySchool,value,children,onHeaderClick}) => {
    return(
        <HeaderItem 
        isCommunitySchool={isCommunitySchool}
        value={value}
        onClick={onHeaderClick}
    >
        {children}
    </HeaderItem>
    )
}

export default MainHeaderItem;