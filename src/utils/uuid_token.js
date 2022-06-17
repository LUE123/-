import { v4 as uuidv4 } from 'uuid'
//随机字符串 不发生变化 
export const getUUID = () => {
    //先找本地
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    //没有就生成
    if (!uuid_token) {
        uuid_token = uuidv4()
        //在本地存一次
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}