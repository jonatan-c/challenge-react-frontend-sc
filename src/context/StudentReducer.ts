import { IStudent, IStudentsState } from "../interfaces/interfaces";
 
export type StudentAction =
  | { type: "ADD_STUDENT"; payload: IStudent }
  | { type: "UPDATE_STUDENT"; payload: IStudent }
  | { type: "DELETE_STUDENT"; payload: string };






export function StudentReducer(state: IStudentsState, action: StudentAction) : IStudentsState {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        studentsList: [...state.studentsList, action.payload]
      };
    case "UPDATE_STUDENT": {
      const newStudent = state.studentsList.map((student) => {
        if (student.id === action.payload.id) {
          return action.payload;
        }
        return student;
      });
      return {
        ...state,
        studentsList: newStudent,
      };
    }
    case "DELETE_STUDENT": {
      return {
        ...state,
        studentsList: state.studentsList.filter((student) => student.id !== action.payload),
      };
    } 
    default:
      return state;
  }
}