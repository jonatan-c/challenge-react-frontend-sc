
import { render ,screen} from '@testing-library/react';
import React from 'react';
import StudentsForm from '../../../src/components/StudentsForm';
import { StudentGlobalContext } from '../../../src/context/StudentGlobalState';


describe('StudentForm Component Test', () => {
    it('should render correctly', () => {
        render(
          // global context test
          <StudentGlobalContext.Provider 
          value={{
            studentsList: [],
            addStudent: () => {},
            updateStudent: () => {},
            deleteStudent: () => {},
            }}
            >

            <StudentsForm />
            </StudentGlobalContext.Provider>
        );
        expect(screen.getByText('Nombre')).toBeInTheDocument();

    }
    );
})