import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
    color: #ffffff;
    background-color: ${props => props.BgColor};
    padding: 3px 8px;
    border-radius: 4px;
    margin-right: 10px;
    color:#ffffff;
    cursor: pointer;
`;

const ItemLayout = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const ItemName = styled.span`
    font-size: 14px;
    margin-bottom: -2px;
`;

const CategoryItem = ({item,onCategoryClick}) => {
    return(
        <Item BgColor={item.color} value={item.communityIdx} onClick={onCategoryClick}>
            <ItemLayout>
                <ItemName>{item.communityName}</ItemName>
                <img width={'24px'} src={item.icon} alt={item.communityName+" 아이콘"}/>
            </ItemLayout>
        </Item>
    )
}

export default CategoryItem;
