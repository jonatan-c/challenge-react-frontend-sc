import React, { ChangeEvent, useContext, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Button, Box, TextField, Alert } from '@mui/material';
import { StudentGlobalContext } from "../context/StudentGlobalState";
import StudentItem from "./StudentItem";


const StudentsList = () => {
    const { studentsList} = useContext(StudentGlobalContext);

  return (
    <>
      {studentsList?.length === 0 ? (
        <Alert
          sx={{
            margin: "1rem",
            border: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          severity="info"
        >
          No hay estudiantes
        </Alert>
      ) : null}

      <Grid container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  display: {  md: "table-row" },
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                }}
              >
                <TableCell>Nombre</TableCell>
                <TableCell>Edad</TableCell>
                <TableCell>Carrera</TableCell>
                <TableCell>Hobbie</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList?.map((student) => (
                <StudentItem key={student.id} student={student} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
     
    </>

    )
}

export default StudentsList