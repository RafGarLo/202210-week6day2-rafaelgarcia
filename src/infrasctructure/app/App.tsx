import { Auth0Provider } from "@auth0/auth0-react";
import { Layout } from "../../features/project/components/layout/layout";
import { AppRoutes } from "../../features/project/components/routes/app.routes";

function App() {
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
            redirectUri={window.location.origin}
        >
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
            <div>Add your own characters some time in the future</div>
        </Auth0Provider>
    );
}
export default App;
