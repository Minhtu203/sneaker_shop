import React, { useEffect, useState } from 'react';
import { useUserState } from '@/store/userState';
import { CreateAxios } from '@/lib/axios';
import { getAllOrders } from '@/api/admin/orderApi';

export default function OrderManagement() {
  useEffect(() => {
    document.title = 'Order Management';
  }, []);

  const { userInfo, setUserInfo } = useUserState();
  const axiosJWT = CreateAxios(userInfo, setUserInfo);

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await getAllOrders(axiosJWT, userInfo?.accessToken);
        setAllOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShoes();
  }, []);

  console.log(111, allOrders);

  return <div>OrderManagement 1111</div>;
}
