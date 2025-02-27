import axios from "axios";

const TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWR4IjoxNzIzLCJuaWNrbmFtZSI6IuyCrOyghOqzvOygnOydkeyLnOyekCIsInVuaXZlcnNpdHkiOjE1LCJtYWpvciI6MzA1LCJlbWFpbENoZWNrIjowLCJpc1N1cHBvcnQiOnRydWUsInJvbGUiOjAsImlhdCI6MTYyMzMxNDcxOSwiZXhwIjoxNjI2OTExMTE5LCJpc3MiOiJib2JhZSJ9.u4_Y5L2sxCKNxN7Evjeyq4BPifjJ0n3DparCLA3ZG0w";

const client = axios.create({
    baseURL:"http://52.79.155.156:3001",
    headers: {
            "Token" : TEST_TOKEN
    }
});
export const getBoredListAPI = async(isCommunitySchool) => {
    try{
        const {data:{data}} = await client.get(`/community/${isCommunitySchool}`);
        console.log('[SUCCESS] GET BORED LIST',data);
        return data
    } catch(e) {
        console.error('[FAIL] GET BORED LIST',e);
    }
}
export const getPostListAPI = async(communityIdx,page=0) => {
    try{
        const {data:{data}} = await client.get(`/community/${communityIdx}/${page}`);
        console.log('[SUCCESS] GET POST LIST',data);
        return data
    } catch(e) {
        console.error('[FAIL] GET POST LIST',e);
    }
}

export const getPostDetailAPI = async(postIdx) => {
    try{
        const {data:{data}} = await client.get(`/community/post/${postIdx}`);
        console.log('[SUCCESS] GET POST DETAIL',data);
        return data
    } catch(e) {
        console.error('[FAIL] GET POST DETAIL',e);
    }
}

export const postLikeAPI = async(postIdx) => {
    try{
        const {data} = await client.post(`/like/post`,{'postIdx' : postIdx});
        console.log('[SUCCESS] POST LIKE',data);
        return data
    } catch(e) {
        console.error('[FAIL] POST LIKE',e);
    }
}
export const deleteLikeAPI = async(postIdx) => {
    try{
        const {data} = await client.delete(`/like/post/${postIdx}`);
        console.log('[SUCCESS] DELETE LIKE',data);
        return data
    } catch(e) {
        console.error('[FAIL] DELETE LIKE',e);
    }
}

export const postCreatePostAPI = async(form,communityIdx) => {
    const formData = new FormData();
    formData.append("title",form.title);
    formData.append("content",form.content);
    formData.append("images",form.images);
    console.log(form.images)
    

    try{
        const {data} = await client.post(`/community/post/${communityIdx}`,formData);
        console.log('[SUCCESS] POST CREATE POST ',data);
        return data
    } catch(e) {
        console.error('[FAIL] POST CREATE POST',e);
    }
}

export const deletePostAPI = async(postIdx) => {
    try{
        const {data} = await client.delete(`/community/post/${postIdx}`);
        console.log('[SUCCESS] DELETE POST',data);
        return data
    } catch(e) {
        console.error('[FAIL] DELETE POST',e);
    }
}

export const putEditPostAPI = async(form,postIdx) => {
    const formData = new FormData();
    formData.append("title",form.title);
    formData.append("content",form.content);

    try{
        const {data} = await client.put(`/community/post/${postIdx}`,formData);
        console.log('[SUCCESS] PUT EDIT POST ',data);
        return data
    } catch(e) {
        console.error('[FAIL] PUT EDIT POST',e);
    }
}

export const getCommentListAPI = async(postIdx,page=0) => {
    try{
        const {data:{data}} = await client.get(`/comment/post/${postIdx}/${page}`);
        console.log('[SUCCESS] GET COMMENT LIST',data);
        return data
    } catch(e) {
        console.error('[FAIL] GET COMMENT LIST',e);
    }
}

export const postCommentLikeAPI = async(commentIdx,postIdx) => {
    try{
        const {data} = await client.post(`/comment/postLike`,{
            'postIdx' : postIdx,'commentIdx':commentIdx
        });
        console.log('[SUCCESS] POST COMMENT LIKE',data);
        return data
    } catch(e) {
        console.error('[FAIL] POST COMMENT LIKE',e);
    }
}
export const deleteCommentLikeAPI = async(commentIdx) => {
    try{
        const {data} = await client.delete(`/comment/postLike/${commentIdx}`);
        console.log('[SUCCESS] DELETE COMMENT LIKE',data);
        return data
    } catch(e) {
        console.error('[FAIL] DELETE COMMENT LIKE',e);
    }
}

export const postCreateCommentAPI = async(content,postIdx,reply=0) => {
    try{
        const {data} = await client.post(`/comment/post`,{
            "postIdx": postIdx,
            "content": content,
            "reply": reply
        });
        console.log('[SUCCESS] POST CREATE COMMENT ',data);
        return data
    } catch(e) {
        console.error('[FAIL] POST CREATE COMMENT',e);
    }
}

export const deleteCommentAPI = async(commentIdx,postIdx) => {
    try{
        const {data} = await client.delete(`/comment/post/${postIdx}/${commentIdx}`);
        console.log('[SUCCESS] DELETE COMMENT',data);
        return data
    } catch(e) {
        console.error('[FAIL] DELETE COMMENT',e);
    }
}

export const postCreateReplyAPI = async(content,postIdx,reply=1,commentIdx,UserIdx) => {
    try{
        const {data} = await client.post(`/comment/post`,{
            "postIdx": postIdx,
            "content": content,
            "reply": reply,
            "targetCommentIdx": commentIdx,
	        "targetUserIdx": UserIdx
        });
        console.log('[SUCCESS] POST CREATE REPLY ',data);
        return data
    } catch(e) {
        console.error('[FAIL] POST CREATE REPLY',e);
    }
}