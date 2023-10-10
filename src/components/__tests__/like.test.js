import Like from "../like";
import { render, screen, fireEvent } from "@testing-library/react";

test("Default p value to be Likes:0", () => {
    render(<Like  />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
} )

test("Like count increments when Like clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
})

test("Like count decrements when Dislike clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})

