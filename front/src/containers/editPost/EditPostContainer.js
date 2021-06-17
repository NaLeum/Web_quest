import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import CreatePost from "../../components/createPost/CreatePost";
import { getPostDetailAPI,putEditPostAPI } from "../../libs/api";

const EditPostContainer = ({history,match}) => {
    const [communityData,setCommunityData] = useState({})
    const [formData, setFormData] = useState({
        title:"",
        content:"",
    });

    useEffect(()=>{
        const boardData = localStorage.getItem("boardData");
        const parseBoardData = JSON.parse(boardData);
        setCommunityData(parseBoardData)
    },[]);

    useEffect(()=>{(
        async()=>{
            try{
                const result = await getPostDetailAPI(match.params.postIdx);
                if(!result.isMine) history.push("/")
                setFormData({
                    title:result.title,
                    content:result.content
                });
                console.log(result)
            }catch(e){
                console.error("[FAIL] GET POST DETAIL",e)
            }

        }
    )();
    },[match.params.postIdx]);
    
    
    const onInputChange = (e) => {
        const {value,name}=e.currentTarget
        setFormData({...formData,[name]:value})
    }

    const onSubmitClick = async(e) => {
        e.preventDefault();
        try {
            const result = await putEditPostAPI(formData,match.params.postIdx);
            if(result.success) history.push("/")            
        } catch (e) {
            console.log(e)
        }
    }


    return(
        communityData && 
        <CreatePost formData={formData} communityData={communityData} onInputChange={onInputChange} onSubmitClick={onSubmitClick}/>
    )
}

export default withRouter(EditPostContainer);