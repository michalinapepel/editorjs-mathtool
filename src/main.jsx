import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import React from "react"

const rootElement = document.getElementById("root")
if (rootElement) {
	createRoot(rootElement).render(<App />)
} else {
	console.error("Failed to find the root element")
}
