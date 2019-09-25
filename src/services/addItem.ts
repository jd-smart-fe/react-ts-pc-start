import  request  from 'utils/request';
import { IntroListResponse,copyIntroToMyType } from '@/typings';

const baseURL = "http://localhost:3300";
// window.smartUtil.post

// 校验每条item是否合法
export const getIntroList = async () => {
    const res = await request<IntroListResponse>({ 
        url: `${baseURL}/getIntroList`, 
        method: "POST",
        data:{ pin: "", type: "1" } });
    // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
    // 详情见`@/utils/request.ts`
    return res && res.data;
}

