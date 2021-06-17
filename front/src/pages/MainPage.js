import { useState } from "react";
import MainHeader from "../components/main/header/MainHeader";
import MainWrapper from "../components/main/MainWrapper";
import CategoryContainer from "../containers/common/CategoryContainer";
import PostListContainer from "../containers/community/post/PostListContainer";

const MainPage = () => {
    const [isCommunitySchool, setIsCommunitySchool] = useState(0);
    const [communityIdx, setCommunityIdx] = useState(2);
    return(
        <>
            <MainHeader 
                isCommunitySchool={isCommunitySchool}
                setIsCommunitySchool={setIsCommunitySchool}
                setCommunityIdx={setCommunityIdx}
            />
            <MainWrapper>
                <CategoryContainer 
                    isCommunitySchool={isCommunitySchool}
                    setCommunityIdx={setCommunityIdx}
                />
                <PostListContainer 
                    communityIdx={communityIdx}
                />
            </MainWrapper>
        </>
    )
}

export default MainPage;