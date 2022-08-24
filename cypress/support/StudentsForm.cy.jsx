
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import StudentsForm from '../../src/components/StudentsForm';
import { StudentGlobalContext } from '../../src/context/StudentGlobalState';
 
 

describe("Students Form inputs", () => {
    it("mounts", () => {
      cy.mount(
        <StudentGlobalContext.Provider
          value={{
            studentsList: [],
            addStudent: () => {},
            updateStudent: () => {},
            deleteStudent: () => {},
          }}
        >
          <MemoryRouter>
            <StudentsForm />
          </MemoryRouter>
        </StudentGlobalContext.Provider>
      );

      cy.viewport(1280, 720)

      cy.get("[data-cy=input-student-name]").type("Jonatan")
      cy.get("[data-cy=input-age]").type(21)
      cy.get("[data-cy=select-career]").parent().click() // click on the select
      cy.get("[data-cy=select-career-ingenieria]").contains("Ingenieria").click() // 
      cy.get("[data-cy=input-hobbie]").type("Jugar")
    


      cy.get("[data-cy=button-addStudent]").click() // click on the select

    });
  
})