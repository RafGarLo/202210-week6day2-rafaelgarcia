import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./header";

describe("Given Header component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <Header />
                </Router>
            );
        });
        test('Then it should display "Character"', () => {
            const title = /Zrones/i;
            const element = screen.getAllByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
