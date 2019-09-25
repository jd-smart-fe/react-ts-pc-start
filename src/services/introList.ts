import  request  from 'utils/request';
import { IntroListResponse,copyIntroToMyType } from '@/typings';

const baseURL = "http://localhost:3300";
// window.smartUtil.post

// 获取训练列表
export const getIntroList = async () => {
    const res = await request<IntroListResponse>({ 
        url: `${baseURL}/getIntroList`, 
        method: "POST",
        data:{ pin: "", type: "1" } });
    // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
    // 详情见`@/utils/request.ts`
    return res && res.data;
}

export const getMyList = async () => {
    const res = await request<IntroListResponse>({ 
        url: `${baseURL}/getMyList`, 
        method: "POST",
        data:{ pin: "", type: "2" } });
    // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
    // 详情见`@/utils/request.ts`
    return res && res.data;
}

// 添加推荐训练到我的训练
export const copyIntroToMy = async(sourceId:number)=> {
    const res = await request<copyIntroToMyType>({
        url: `${baseURL}/copyIntroToMy`,
        method: 'POST',
        data:{pin:"",sourceId}
    })
    return res && res.data;
}