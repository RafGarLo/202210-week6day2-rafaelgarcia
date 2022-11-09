import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import CharacterPage from "./character.page";

describe("Given TodoPage component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <CharacterPage />
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const title = /Page/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
