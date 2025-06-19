import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import App from "../src/App.jsx"

describe("App", () => {
    it("renders hello", () => {
        render(<App />)
        expect(screen.getByRole("heading").textContent).toMatch(/Hello/i)
    })
})
