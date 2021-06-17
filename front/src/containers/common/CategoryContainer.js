import { useEffect, useState } from "react";
import Category from "../../components/main/category/Category";
import { getBoredListAPI } from "../../libs/api";


const CategoryContainer = ({isCommunitySchool,setCommunityIdx}) => {
    const [boardList,setBoredList] = useState([])
    useEffect(()=>{(
        async()=>{
            try{
                const result = await getBoredListAPI(isCommunitySchool);
                setBoredList(result)
            }catch(e){
                console.error("[FAIL] GET BORED List",e)
            }

        }
    )();
    },[isCommunitySchool]);
    const onCategoryClick = (e) => {
        const targetValue = e.currentTarget.getAttribute('value');
        setCommunityIdx(targetValue)
    }
    return(
        boardList.length !== 0 &&
        <Category boardList={boardList} onCategoryClick={onCategoryClick}/>
    )
}

export default CategoryContainer;