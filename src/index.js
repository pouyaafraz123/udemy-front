import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery/dist/jquery.min";
import "@popperjs/core/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

