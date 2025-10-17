import { postData } from '@/lib/axios';

export const loginApi = async (data) => {
    const res = await postData('/api/auth/login', data);
    return res.data;
};
