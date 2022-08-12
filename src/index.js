import React from 'react';
import ReactDOM from 'react-dom/client';
import PagesRouts from "./routes/PagesRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/libraries/bootstrap-rtl.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.min";
import "@popperjs/core/dist/umd/popper.min";
import "./assets/fonts/fonts.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

