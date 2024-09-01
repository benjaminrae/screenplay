import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Example from "@/components/Example.tsx";

describe("Example", () => {
    it("should render correctly", () => {
        render(<Example />);

        const heading = screen.getByRole("heading", { name: /this is a test heading/i });
        const paragraph = screen.getByText(/this is a test paragraph/i);

        expect(heading).toBeVisible();
        expect(paragraph).toBeVisible();
    });
});