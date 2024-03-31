import {commonAPI} from "./commonAPI"
import {SERVER_URL} from "./serverUrl"



//video up
export const uploadVideoAPI = async(video)=>{
    return await commonAPI ("POST",`${SERVER_URL}/allvideos`,video); 
}
//get all videos

export const getAllUploadVideoAPI = async()=>{
    return await commonAPI ("GET",`${SERVER_URL}/allvideos`,"")
}

//video get byid

export const getAVideoAPI = async(id)=>{
    return await commonAPI ("GET",`${SERVER_URL}/allvideos/${id}`,"")
}
//video add watchhistory

export const addVideoHistoryAPI = async(video)=>{
    return await commonAPI ("POST",`${SERVER_URL}/history`,video)
}

//get watch history

export const getHistoryAPI = async()=>{
    return await commonAPI ("GET",`${SERVER_URL}/history`,"")
}

// del history

export const deleteHistoryAPI = async(id)=>{
    return await commonAPI ("DELETE",`${SERVER_URL}/history/${id}`,{})
}


// del video

export const deletevideoAPI = async(id)=>{
    return await commonAPI ("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}

//add category

export const addCategoryAPI = async(category)=>{
    return await commonAPI ("POST",`${SERVER_URL}/category`,category)
}
//get allcetegory
export const getAllCategoryAPI = async()=>{
    return await commonAPI ("GET",`${SERVER_URL}/category`,"")
}

export const removeCategoryAPI = async(id)=>{
    return await commonAPI ("DELETE",`${SERVER_URL}/category/${id}`,{})
}




export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI ("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}


