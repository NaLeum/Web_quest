import { useCallback, useEffect, useState } from "react";
import { getPostListAPI } from "../../libs/api";
import PostList from "../../components/post/PostList"
import PostListHeader from "../../components/post/PostListHeader";
import { useInView } from "react-intersection-observer";

const PostListContainer = ({communityIdx}) => {
    const [postList,setPostList] = useState([]);
    const [page,setPage] = useState(0);
    const [loading, setLoading] = useState(false)
    const [ref, inView] = useInView();
    const [done, setDone] = useState(false);
    
    const getMorePostList = useCallback(async () => {
        setLoading(true);
            try{
                const result = await getPostListAPI(communityIdx.index,page);
                setPostList(postList.concat(result.data));
                if(result.data.length === 0) setDone(true);
            }catch(e){
                console.error("[FAIL] GET POST LIST",e)
            }
        setLoading(false);
      }, [page])
    
      // `getItems` 가 바뀔 때 마다 함수 실행
      useEffect(() => {
          if(page!==0&&!done) getMorePostList();
      }, [getMorePostList]);


    useEffect(()=>{
        (async()=>{
            setLoading(true);
            try{
                const result = await getPostListAPI(communityIdx.index);
                setPostList(result.data);
                setPage(0);
                setDone(false);
            }catch(e){
                console.error("[FAIL] GET POST LIST",e)
            }
            setLoading(false);
        })();
    },[communityIdx]);

    useEffect(() => {
        if (inView && !loading &&postList.length!==0) {
            setPage(prevState => prevState + 1)
        }
      }, [inView, loading, postList.length])
    
    const onCreatePostClick = () => {
        localStorage.setItem("boardData",JSON.stringify({
            "communityIdx":communityIdx.index,
            "communityName": communityIdx.name
        }));
    }


    return (
        <>
            <PostListHeader onCreatePostClick={onCreatePostClick}/>
            {postList.length !==0 && (
                <>
                    <PostList postList={postList}/>
                    <div ref={ref}></div>
                </>
            )}
        </>
    )
}

export default PostListContainer;