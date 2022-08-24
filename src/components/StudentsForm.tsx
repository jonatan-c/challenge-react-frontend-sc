import React, {  useContext, useEffect, useState  } from 'react';
import { useParams } from "react-router-dom";
import { FormControl, MenuItem, TextField, Container, Button } from "@mui/material";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { IStudent } from '../interfaces/interfaces';
import { StudentGlobalContext } from '../context/StudentGlobalState';
import Swal from 'sweetalert2';

const initialStudent = {
  name: "",
  age: 0,
  career: "",
  hobbie: "",
};

const StudentsForm = () => {


    const [studentForm, setStudentForm] = useState<IStudent>(initialStudent);
    const {name,age,career,hobbie} = studentForm;

    const params = useParams();

    const onInputChange = (e: any) => {
      
        setStudentForm({
        ...studentForm,
        [e.target.name]: e.target.value,
      });
    };
    
    const { addStudent,updateStudent,studentsList} = useContext(StudentGlobalContext);
    
    
    useEffect(() => {
      localStorage.setItem('StudentsLocalStorage', JSON.stringify( studentsList || [] ));
    }, [studentsList])

    useEffect(() => {
        const studentFound = studentsList?.find((student) => student.id === params.id);
        if (studentFound) {
          setStudentForm({
            id: studentFound.id,
            name: studentFound.name,
            age: studentFound.age,
            career: studentFound.career,
            hobbie: studentFound.hobbie,
          });
        }
      }, [params.id ,studentsList]);
    

    const onResetForm = () => {
        setStudentForm(initialStudent);
      }
      
      const onFormSubmit = (e : any) :void => {
        e.preventDefault();        
        if(name === '' || age === 0 || career === '' || hobbie === ''){
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor completar todos los campos',
          })
        } else {
          if (!studentForm.id) {
            addStudent(studentForm);
          } else {
            updateStudent(studentForm);
          }
          onResetForm();
        }
        
      }



  return (
    <>
           <Container maxWidth="sm" style={{ backgroundColor: "white" }}>
        <FormControl
          fullWidth
          style={{ padding: "25px 0" }}
        >
          <label>Nombre</label>
          <TextField
            autoComplete='off'
            data-cy="input-student-name"
            style={{ margin: "10px 0" }}
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
          />
          <label>Edad</label>
          <TextField
            autoComplete='off'
            data-cy="input-age"
            style={{ margin: "10px 0" }}
            type="number"
            name="age"
            value={age}
            onChange={onInputChange}
          />
          <FormControl
          
          >
            <label>Carrera</label>
            <Select
              style={{ margin: "10px 0", color: "#595959" }}
              name="career"
              displayEmpty
              onChange={onInputChange}
              value={career}
              data-cy="select-career"
            >
              <MenuItem disabled value="">
                Seleccionar una carrera
              </MenuItem>
              <MenuItem 
                data-cy="select-career-ingenieria"
              value="Ingenieria">Ingenieria</MenuItem>
              <MenuItem value="Arquitectura">Arquitectura</MenuItem>
              <MenuItem value="Abogacia">Abogacia</MenuItem>
              <MenuItem value="Contadora">Contadora</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <label>Hobbie:</label>
            <TextField
            autoComplete='off'
            data-cy="input-hobbie"
            style={{ margin: "10px 0" }}
            type="text"
            name="hobbie"
            value={hobbie}
            onChange={onInputChange}
          />
        
          </FormControl>


          <Box>
            {!studentForm.id ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "red" }}
                type="submit"
                onClick={onFormSubmit}
                data-cy="button-addStudent"
              >
                Agregar estudiante
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "red" }}
                type="submit"
                onClick={onFormSubmit}
              >
                Salvar cambios
              </Button>
            )}
          </Box>

        </FormControl>
      </Container>
    </>
  )
}

export default StudentsForm