import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import App from "./App";

describe("Given App component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Layout>
                    <App></App>
                </Layout>
            </Router>
        );
    });
    test("renders aprendiendo react", async () => {
        const title = new RegExp("App", "i");
        const element = await screen.findByText(title);
        expect(element).toBeInTheDocument();
    });
});
