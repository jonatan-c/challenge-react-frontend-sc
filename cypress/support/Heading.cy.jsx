import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Heading from '../../src/components/Heading';


describe("Headyng e2e", () => {
    it("mounts", () => {
      cy.mount(
        <MemoryRouter>
          <Heading />
          
        </MemoryRouter>
      );
  
      const buttonAddStudent = "[data-cy=button-add-student]"; 
      cy.get(buttonAddStudent).click()
      cy.get("[data-cy=title-list-student-add]").should("have.text","Agregar estudiante");
      cy.get("[data-cy=button-back]").click()
      cy.get("[data-cy=title-list-student-add]").should("have.text","Lista de estudiantes");
   
    });
  
})