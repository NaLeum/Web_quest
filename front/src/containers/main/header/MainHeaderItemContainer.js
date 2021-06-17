import MainHeaderItem from "../../../components/main/header/MainHeaderItem"

const MainHeaderItemContainer = ({isCommunitySchool,value,setIsCommunitySchool,setCommunityIdx,children}) => {
    const onHeaderClick = (e) => {
        // 수정 필요
        setIsCommunitySchool(value);
        if(value===0){
            setCommunityIdx(2)            
        }else{
            setCommunityIdx(3984)
        }
    }
    return(
        <MainHeaderItem 
            isCommunitySchool={isCommunitySchool}
            value={value}
            onHeaderClick={onHeaderClick}
            children={children}
        />
    )
}

export default MainHeaderItemContainer;