import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import {v4} from 'uuid';

 
import { IStudent, IStudentContexProp, IStudentsState, props } from '../interfaces/interfaces';
import { StudentReducer } from "./StudentReducer";
 
const initialState: IStudentsState = {
    studentsList: JSON.parse(localStorage.getItem("StudentsLocalStorage") || "[]"),
};
 
export const StudentGlobalContext = createContext<IStudentContexProp>({} as IStudentContexProp);


// STATE GLOBAL PROVIDER
export const StudentGlobalProvider = ({ children }:props) => {
  
  
  const [state, dispatch] = useReducer(StudentReducer, initialState);

 
  const addStudent = (student : IStudent): void => {
    try {
      dispatch({
        type: "ADD_STUDENT",
        payload: { ...student, id: v4() },
      });
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Estudiante agregado correctamente',
        showConfirmButton: false,
        timer: 3000
      })
      
    } catch (error) {
      console.log(error);
      
    }

  }

  

  function updateStudent(updateStudent : IStudent):void {
    try {
      dispatch({
        type: "UPDATE_STUDENT",
        payload: updateStudent,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Estudiante actualizado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });


    } catch (error) {
      console.log(error);
      
    }

  }

  function deleteStudent(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'ELIMINADO!',
          'ESTUDIANTE ELIMINADO CORRECTAMENTE.',
          'success'
        )
        dispatch({
          type: "DELETE_STUDENT",
          payload: id,
        });
      }
    })

  }

  return (
    <StudentGlobalContext.Provider
      value={{
        studentsList: state.studentsList,
        addStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentGlobalContext.Provider>
  );
};