import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryWrapper = styled.section`
    background-color: #F1F3F4;
    width: 100%;
    padding: 10px;
    overflow: scroll;
`;
const CategoryList = styled.ul`
    width: max-content;
    display: flex;
`;

const Category = ({boardList}) => {
    return (
        <CategoryWrapper>
            <CategoryList>
                {boardList.map((item, idx)=>(
                    <CategoryItem key={idx} item={item}/>
                ))}
            </CategoryList>
        </CategoryWrapper>
    )
}

export default Category;