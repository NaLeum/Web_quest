import { useEffect, useState } from "react";
import Category from "../../components/main/category/Category";
import { getBoredListAPI } from "../../libs/api";


const CategoryContainer = ({isCommunitySchool}) => {
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
    },[isCommunitySchool])
    return(
        boardList.length !== 0 &&
        <Category boardList={boardList}/>
    )
}

export default CategoryContainer;