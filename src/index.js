import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/libraries/bootstrap-rtl.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.min";
import "@popperjs/core/dist/umd/popper.min";
import "./assets/fonts/fonts.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import App from "./app/App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);

