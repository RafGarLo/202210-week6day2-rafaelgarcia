import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./header";
import { Menu } from "../menu/menu";

describe("Given Header component", () => {
    describe("When we render the component", () => {
        test('Then it should display "img"', () => {
            render(
                <Router>
                    <Header />
                </Router>
            );
            const element = screen.getByText(/React/i);
            expect(element).toBeInTheDocument();
        });
    });
});
