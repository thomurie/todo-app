import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./todo";

// Smoke
test("renders learn react link", () => {
  render(<Todo />);
});

// Snapshot
test("Matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic
test("Title Renders", () => {
  render(<Todo task="Test Components" />);
  expect(screen.queryByText("Test Components")).toBeInTheDocument();
});

test("Buttons Render", () => {
  const { queryByText } = render(<Todo task="Test Components" />);
  expect(queryByText("Complete")).toBeInTheDocument();
  expect(queryByText("Delete")).toBeInTheDocument();
});
