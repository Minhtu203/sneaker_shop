import { DataTable as DataTables } from 'primereact/datatable';
import Column from './Column';
import Button from '../Button/Button';
import { useState } from 'react';
import Dialog from '../Overlay/Dialog';
import { InputPassword } from '@/pages/Login';
import { Toastz } from '@/utils/Toast';

const VALID_PASSWORD = import.meta.env.VITE_DELETE_PASSWORD;

// eslint-disable-next-line react-refresh/only-export-components
export const formattedDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

const DataTable = (props) => {
  const { action, setDelete, totalRecords, toast, ...prop } = props;
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [password, setPassword] = useState('');
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === VALID_PASSWORD) {
      setDelete(id);
      setVisibleDelete(false);
      setPassword('');
    } else {
      const data = { success: false, message: 'Invalid password' };
      Toastz(data, toast);
      setVisibleDelete(false);
      setPassword('');
    }
  };

  return (
    <>
      <DataTables
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        footer={
          <span className="text-[var(--primary-blue)] font-semibold">
            Total Records: {totalRecords || 0}
          </span>
        }
        {...prop}
      >
        {props.children}

        {action && (
          <Column
            header="Actions"
            body={(i) => (
              <div className="flex flex-row gap-4">
                <Button
                  icon="pi pi-pencil"
                  label="Update"
                  className="!bg-[var(--primary-yellow)] !border-none"
                />
                <Button
                  icon="pi pi-trash"
                  label="Delete"
                  onClick={() => {
                    setVisibleDelete(true);
                    setId(i?._id);
                  }}
                  className="!bg-red-800 !border-none"
                />
              </div>
            )}
          />
        )}
      </DataTables>
      <Dialog
        header="Enter password to delete data"
        visible={visibleDelete}
        style={{ width: '30vw' }}
        onHide={() => {
          if (!visibleDelete) return;
          setVisibleDelete(false);
          setPassword('');
        }}
      >
        <InputPassword className="py-12" password={password} setPassword={setPassword} />
        <Button onClick={handleSubmit} label="Delete" className="!bg-red-500 !border-none" />
      </Dialog>
    </>
  );
};

export default DataTable;
