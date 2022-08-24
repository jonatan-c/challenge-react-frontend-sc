export interface IStudent {
    id?: string;
    name:string;
    age: number;
    career: string;
    hobbie:string;
}

export interface IStudentsState {

    studentsList: IStudent[] 

}

export interface props {
    children: JSX.Element | JSX.Element[]
  }
  

  export type IStudentContexProp = {
    studentsList: IStudent[];
    addStudent:  (student: IStudent) => void;
    updateStudent: (student: IStudent) => void;
    deleteStudent: (id: string) => void;
 
}