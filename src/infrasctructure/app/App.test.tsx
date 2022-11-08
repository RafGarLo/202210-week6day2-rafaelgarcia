import { render, screen } from "@testing-library/react";
import { Layout } from "../../features/project/components/layout/layout";
import App from "./App";

describe("Given App component", () => {
    beforeEach(() => {
        render(
            <Layout>
                <App></App>
            </Layout>
        );
    });
    test("renders add your characters", async () => {
        const title = /future/i;
        const element = await screen.findByText(title);
        expect(element).toBeInTheDocument();
    });
});
