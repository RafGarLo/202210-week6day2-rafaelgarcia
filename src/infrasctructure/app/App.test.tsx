import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given App component", () => {
    render(<App></App>);
    test("renders add your characters", () => {
        const title = /future/i;
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument();
    });
});
