import { deleteUserApi, getAllUsers } from '@/api/admin/userSelectionApi';
import { Column, DataTable } from '@/components/uiCore/index';
import { CreateAxios } from '@/lib/axios';
import { useUserState } from '@/store/userState';
import { Toastz } from '@/utils/Toast';
import { useEffect, useState } from 'react';

export default function UserSection({ toast }) {
  const { userInfo, setUserInfo } = useUserState();
  let axiosJWT = CreateAxios(userInfo, setUserInfo);
  const [allUsers, setAllUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState('');

  // get all user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers(axiosJWT, userInfo?.accessToken);
        setAllUsers(data?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo, deleteUser]);

  // api delete user
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deleteUser) {
          const res = await deleteUserApi(axiosJWT, userInfo?.accessToken, deleteUser);
          Toastz(res.data, toast);
          setDeleteUser('');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteUser]);

  return (
    <div className={`flex flex-col`}>
      <DataTable toast={toast} value={allUsers} action setDelete={setDeleteUser} totalRecords={allUsers?.length}>
        <Column sortable header="Username" field="username" />
        <Column sortable header="Email" field="email" />
        <Column sortable header="Role" field="role" />
      </DataTable>
    </div>
  );
}
