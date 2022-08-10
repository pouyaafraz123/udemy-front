import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assessts/libraries/bootstrap-rtl.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.min";
import "@popperjs/core/dist/umd/popper.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

