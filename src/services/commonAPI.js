import axios from "axios";
export const commonAPI = async (httpMetthod,url,reqBody)=>{
    let reqConfig = {
        method:httpMetthod,
        url,
        headers:{
            "Content-Type": "application/json"
        },
        data:reqBody

    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}