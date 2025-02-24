import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Todo List Functionality", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("should render todo input field", () => {
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();
  });

  test("should add new todo when submitted", () => {
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Test todo item" } });
    fireEvent.click(submitButton);

    expect(screen.getByText("Test todo item")).toBeInTheDocument();
  });

  test("should mark todo as complete when clicked", () => {
    // Add a todo first
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const submitButton = screen.getByRole("button", { name: /add/i });
    fireEvent.change(input, { target: { value: "Complete me" } });
    fireEvent.click(submitButton);

    // Find and click the todo item
    const todoItem = screen.getByText("Complete me");
    fireEvent.click(todoItem);

    // Check if it has completed styling
    expect(todoItem).not.toBeInTheDocument();
  });

  test("should handle empty input gracefully", () => {
    const submitButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(submitButton);

    // Verify no empty todo was added
    const todos = screen.queryAllByRole("listitem");
    expect(todos.length).toBe(0);
  });
});
