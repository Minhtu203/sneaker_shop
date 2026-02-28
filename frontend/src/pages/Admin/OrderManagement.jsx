import React, { useEffect, useState } from 'react';
import { useUserState } from '@/store/userState';
import { CreateAxios } from '@/lib/axios';
import { deleteOrderApi, getAllOrders } from '@/api/admin/orderApi';
import { Column, DataTable } from '@/components/uiCore/index';
import { Toastz } from '@/utils/Toast';

export default function OrderManagement({ toast }) {
  useEffect(() => {
    document.title = 'Order Management';
  }, []);

  const { userInfo, setUserInfo } = useUserState();
  const axiosJWT = CreateAxios(userInfo, setUserInfo);

  const [allOrders, setAllOrders] = useState([]);
  const [deleteOrderId, setDeleteOrderId] = useState('');

  // get all orders
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteOrderId]);

  // delete order
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (deleteOrderId) {
          const res = await deleteOrderApi(axiosJWT, userInfo?.accessToken, deleteOrderId);
          Toastz(res.data, toast);
          setDeleteOrderId('');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteOrderId]);

  // console.log(111, allOrders?.allOrders);

  return (
    <div className="py-8">
      <DataTable
        action
        value={allOrders?.allOrders}
        setDelete={setDeleteOrderId}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        totalRecords={allOrders?.allOrders?.length}
      >
        <Column sortable header="ID code" field="_id" />
        <Column
          sortable
          header="Product"
          body={(i) => {
            return i?.items.map((t) => (
              <div key={t?._id} className="flex flex-row gap-2 my-2 items-center">
                <img src={t?.image} alt="shoes" className="w-20 h-20 object-cover rounded-2xl" />
                <div className="flex flex-col">
                  <span className="mr-4">{t?.name}</span>
                  <span className="text-sm">Size: {t?.size}</span>
                </div>
                <span>Quantity: {t?.quantity}</span>
              </div>
            ));
          }}
        />
        <Column
          sortable
          header="Total"
          body={(i) =>
            i?.totalAmount.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })
          }
        />
      </DataTable>
    </div>
  );
}
