import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import CommentList from "../../../components/postDetail/comment/CommentList";
import { getCommentListAPI } from "../../../libs/api";
import CommentInputContainer from "./CommentInputContainer";



const CommentListContainer = ({match,setCommentCount,commentCount}) => {
    const [commentData, setCommentData] = useState([]);

    useEffect(()=>{(
        async()=>{
            try{
                const commentResult = await getCommentListAPI(match.params.postIdx);
                setCommentData(commentResult.data);
                console.log(commentResult.data)
            }catch(e){
                console.error("[FAIL] GET COMMENT LIST",e)
            }

        }
    )();
    },[match.params.postIdx]);

    return(
        <>
            <CommentInputContainer  
                setCommentData={setCommentData}
                setCommentCount={setCommentCount}
                commentCount={commentCount}
            />
            {commentData.length !== 0 &&
                    <CommentList 
                        commentData={commentData} 
                        postIdx={match.params.postIdx} 
                        setCommentData={setCommentData}
                        setCommentCount={setCommentCount}
                        commentCount={commentCount}
                    />
            }
        </>
    )
}

export default withRouter(CommentListContainer);