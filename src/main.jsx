import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from "react-router-dom";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}




ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
        </ClerkProvider>
    </BrowserRouter>);