import { useEffect, useState } from "react";
import { getPostListAPI } from "../../libs/api";
import PostList from "../../components/post/PostList"
import PostListHeader from "../../components/post/PostListHeader";

const PostListContainer = ({communityIdx}) => {
    const [postList,setPostList] = useState([])
    useEffect(()=>{(
        async()=>{
            try{
                const result = await getPostListAPI(communityIdx.index);
                setPostList(result.data)
            }catch(e){
                console.error("[FAIL] GET POST LIST",e)
            }

        }
    )();
    },[communityIdx]);

    const onCreatePostClick = () => {
        localStorage.setItem("boardData",JSON.stringify({
            "communityIdx":communityIdx.index,
            "communityName": communityIdx.name
        }));
    }

    return (
        <>
            <PostListHeader onCreatePostClick={onCreatePostClick}/>
            {postList.length !==0 && <PostList postList={postList}/>}
        </>
    )
}

export default PostListContainer;