import { useEffect, useState } from "react";
import { getPostListAPI } from "../../libs/api";
import PostList from "../../components/post/PostList"

const PostListContainer = ({communityIdx}) => {
    const [postList,setPostList] = useState([])
    useEffect(()=>{(
        async()=>{
            try{
                const result = await getPostListAPI(communityIdx);
                setPostList(result.data)
            }catch(e){
                console.error("[FAIL] GET POST LIST",e)
            }

        }
    )();
    },[communityIdx]);
    
    return (
        postList.length !==0 &&
        <PostList postList={postList}/>
    )
}

export default PostListContainer;