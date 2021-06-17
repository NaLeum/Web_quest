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
        console.errer('[FAIL] GET BORED LIST',e);
    }
}
export const getPostListAPI = async(communityIdx,page=0) => {
    try{
        const {data:{data}} = await client.get(`/community/${communityIdx}/${page}`);
        console.log('[SUCCESS] GET POST LIST',data);
        return data
    } catch(e) {
        console.errer('[FAIL] GET POST LIST',e);
    }
}