import { render,screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import StudentItem from '../../../src/components/StudentItem';



describe('TEST Estudiante Item', () => {
    test("renders correctly", () => {
        render(
          <BrowserRouter>
            <StudentItem student={{
                id: "1",
                name: "Estudiante 1",
                age: 22,
                career: "Abogacia",
                hobbie: "nadar",
            }} />
          </BrowserRouter>
        );
        expect(screen.getByText("Estudiante 1" )).toBeInTheDocument();
      });
})