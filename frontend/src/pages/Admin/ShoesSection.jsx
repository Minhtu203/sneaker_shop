/* eslint-disable react-hooks/exhaustive-deps */
import { deleteShoesById } from '@/api/admin/shoesSectionApi';
import { getAllShoes } from '@/api/homeApi';
import { formattedDate } from '@/components/uiCore/Data/DataTable';
import { Column, DataTable } from '@/components/uiCore/index';
import { CreateAxios } from '@/lib/axios';
import { useUserState } from '@/store/userState';
import { Toastz } from '@/utils/Toast';
import React, { useEffect, useState } from 'react';

export default function ShoesSection({ toast }) {
  const { userInfo, setUserInfo } = useUserState();
  let axiosJWT = CreateAxios(userInfo, setUserInfo);
  const [allShoes, setAllShoes] = useState([]);
  const [deleteShoes, setDeleteShoes] = useState('');

  // get all shoes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllShoes(axiosJWT, userInfo?.accessToken);
        setAllShoes(data?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userInfo, deleteShoes]);

  // delete shoes
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deleteShoes) {
          const res = await deleteShoesById(axiosJWT, userInfo?.accessToken, deleteShoes);
          Toastz(res.data, toast);
          setDeleteShoes('');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [deleteShoes]);

  return (
    <div className="flex flex-col">
      <DataTable
        toast={toast}
        setDelete={setDeleteShoes}
        value={allShoes}
        paginator
        action
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        totalRecords={allShoes?.length}
      >
        <Column sortable header="Brand" field="brand" />
        <Column sortable header="Name" field="name" />
        <Column
          header="Image"
          body={(i) => (
            <img src={i?.colors?.[0]?.img?.[0]} alt="shoes" className="w-20 h-20 rounded-2xl" />
          )}
        />
        <Column
          sortable
          header="Price"
          body={(i) =>
            i?.price.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })
          }
        />
        <Column header="Created at" body={(i) => formattedDate(i?.createdAt)} />
        <Column header="Is featured" body={(i) => i.isFeatured} />
        <Column header="Category" body={(i) => i.category} />
      </DataTable>
    </div>
  );
}
