import { render, screen } from "@testing-library/react";
import HomePage from "./home.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the home page title", () => {
            render(<HomePage />);

            const element = screen.getByText(/Season/i);
            expect(element).toBeInTheDocument();
        });
    });
});
