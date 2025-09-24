'use client';
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userName', headerName: 'User Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    // type: 'text',
    width: 90,
  }];

const rows = [
  { id: 1, userName: 'Snow', email: 'Jon', phone: 3535353535 },
  { id: 2, userName: 'Lannister', email: 'Cersei', phone: 4242424242 },
  { id: 3, userName: 'Lannister', email: 'Jaime', phone: 4545454545 },
  { id: 4, userName: 'Stark', email: 'Arya', phone: 1616161616 },
  { id: 5, userName: 'Targaryen', email: 'Daenerys', phone: null },
  { id: 6, userName: 'Melisandre', email: null, phone: 150 },
  { id: 7, userName: 'Clifford', email: 'Ferrara', phone: 44 },
  { id: 8, userName: 'Frances', email: 'Rossini', phone: 36 },
  { id: 9, userName: 'Roxie', email: 'Harvey', phone: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
