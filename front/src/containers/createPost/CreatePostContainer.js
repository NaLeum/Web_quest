import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import CreatePost from "../../components/createPost/CreatePost";
import { postCreatePostAPI } from "../../libs/api";

const CreatePostContainer = ({history}) => {
    const [communityData,setCommunityData] = useState({})
    const [formData, setFormData] = useState({
        title:"",
        content:"",
        images:[],
    })
    useEffect(()=>{
        const boardData = localStorage.getItem("boardData");
        const parseBoardData = JSON.parse(boardData);
        setCommunityData(parseBoardData)
    },[])
    
    const onInputChange = (e) => {
        const {value,name}=e.currentTarget;
        if(name==="images"){
            setFormData({...formData,[name]:e.currentTarget.files})
        }else{
            setFormData({...formData,[name]:value});
        }
        console.log(formData)
    }

    const onSubmitClick = async(e) => {
        e.preventDefault();
        try {
            const result = await postCreatePostAPI(formData,communityData.communityIdx);
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

export default withRouter(CreatePostContainer);