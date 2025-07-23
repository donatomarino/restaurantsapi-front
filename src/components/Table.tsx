import { useContext, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import instanceAxios from '../api/APIUtils';
import { useState } from "react";
import { BaseApiResponse, Restaurant, RestaurantCellParams } from "../types";
import { EditButtons } from "./EditButtons";
import FullPageLoader from "./PageLoader";
import useLoad from "../hooks/useLoad";
import { ReloadContext } from "../contexto/ReloadContext";

const Table = () => {
  const { reload } = useContext(ReloadContext);
  const [rows, setRows] = useState<Array<Restaurant>>([]);
  const { loading, startLoading, stopLoading } = useLoad();

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      try {
        startLoading();
        const restaurantes: BaseApiResponse = await instanceAxios.getRequest({
          url: '/restaurants'
        })

        // Si la respuesta es exitosa, actualiza las filas
        restaurantes.data && setRows(restaurantes.data);

      } catch (e: unknown) {
        console.error(e);
      } finally {
        stopLoading();
      }
    }
    fetch();
  }, [reload]);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Nombre', flex: 1 },
    { field: 'address', headerName: 'Dirección', flex: 1.5 },
    { field: 'phone', headerName: 'Contacto', flex: 0.7 },
    {
      field: 'modified',
      headerName: '', flex: 0.4,
      renderCell: (params: RestaurantCellParams) =>
        <EditButtons params={params} />
    },
    { field: 'updated_at', headerName: 'Last update', flex: 0 }
  ];

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <div className="container mx-auto">
      {loading ? (
        <FullPageLoader loading={loading} />
      ) : (
        <Paper sx={{ height: '80vh', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel },
              columns: {
                columnVisibilityModel: {
                  id: false,
                  updated_at: false
                },
              },
              sorting: {
                sortModel: [{ field: 'updated_at', sort: 'desc' }],
              },
            }}
            pageSizeOptions={[5, 10]}
            sx={{
              border: 0,
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: '#1f2937',
                color: '#fff',
                fontWeight: 'bold',
              },
              '& .MuiDataGrid-sortIcon': {
                color: '#fff',
              },
              '& .MuiDataGrid-columnHeader button svg': {
                color: '#fff',
              },
            }}
          />
        </Paper>
      )}
    </div>)
}

export default Table;