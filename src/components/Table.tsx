import { useContext, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import instanceAxios from '../api/APIUtils';
import { useState } from "react";
import { BaseApiResponse, Restaurant, RestaurantCellParams } from "../types";
import { EditButtons } from "./EditButtons";
import FullPageLoader from "./PageLoader";
import { LoadContext } from "../contexto/LoadContext";

const Table = () => {
  const { reload} = useContext(LoadContext);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  
  useEffect(() => {
    const fetch = async (): Promise<void> => {
      try {
        setLoadingPage(true)
        const restaurantes: BaseApiResponse = await instanceAxios.getRequest({
          url: '/restaurants'
        })
        
        // Si la respuesta es exitosa, actualiza las filas
        restaurantes.data && setRows(restaurantes.data);
        
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setLoadingPage(false)
      }
    }
    fetch();
  }, [reload]);
  
  const [rows, setRows] = useState<Array<Restaurant>>([]);
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
      <Paper sx={{ height: '75vh', width: '100%' }}>
        {loadingPage ? (
          <FullPageLoader loading={loadingPage} />
        ) : (
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
        )}
      </Paper>
    </div>
  );
}

export default Table;