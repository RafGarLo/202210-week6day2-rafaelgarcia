import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import HomePage from "./home.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the home page title", () => {
            render(
                <Router>
                    <HomePage />
                </Router>
            );

            const element = screen.getByText(/Home Page/);
            expect(element).toBeInTheDocument();
        });
    });
});
