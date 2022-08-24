import { Box, TableCell, TableRow, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { StudentGlobalContext } from '../context/StudentGlobalState';


const StudentItem = ({student}:any ) => {

    const {id,name,age,career,hobbie} = student;
    
    const { studentsList, deleteStudent } = useContext(StudentGlobalContext);
 
    useEffect(() => {
        localStorage.setItem(
          "StudentsLocalStorage",
          JSON.stringify(studentsList || [])
        );  
      }, [studentsList]);

  return (
    <>
      <TableRow
        sx={{
          display: {
            flexDirection: "row",
            borderBottom: "inherit",
            justifyContent: "space-between",
          },
        }}
      >
        <TableCell>
          <Box display="flex">{name}</Box>
        </TableCell>

        <TableCell>
          <Box display="flex" flexDirection="row" alignItems="center">
            {age}
          </Box>
        </TableCell>
        <TableCell>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box paddingLeft={1}>{career}</Box>
          </Box>
        </TableCell>
        <TableCell>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box paddingLeft={1}>{hobbie}</Box>
          </Box>
        </TableCell>

        <TableCell>
          <Button component={Link} to={`/edit-student/${id}`}>
            Editar
          </Button>
          <Button onClick={() => deleteStudent(id)}>Eliminar</Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default StudentItem