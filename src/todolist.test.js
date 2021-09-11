import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./todolist";

// Smoke
test("renders learn react link", () => {
  render(<TodoList />);
});

// Snapshot
test("Matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic

test("Form renders", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);
  expect(getByLabelText("Task Title:")).toBeInTheDocument();
  expect(queryByText("Create Task")).toBeInTheDocument();
});

test("Can enter data", () => {
  // render the component
  const { getByLabelText } = render(<TodoList />);
  const textInput = getByLabelText("Task Title:");
  // enter data in the form
  fireEvent.change(textInput, { target: { value: "Test Components" } });
  // expect the input data to be in the form
  const inputVal = getByLabelText("Task Title:");
  expect(inputVal.value).toEqual("Test Components");
});

test("Submitting form renders Task", () => {
  const { getByLabelText, queryByText, queryAllByText } = render(<TodoList />);
  const textInput = getByLabelText("Task Title:");
  const sumbitBtn = queryByText("Create Task");

  fireEvent.change(textInput, { target: { value: "Test Components" } });
  fireEvent.click(sumbitBtn);

  expect(queryByText("Test Components")).toBeInTheDocument();
  expect(queryAllByText("Complete").length).toEqual(2);
});

test("Can complete / delete tasks from list", () => {
  // render component
  const { getByLabelText, queryByText, queryAllByText } = render(<TodoList />);
  // create a box with the form
  const textInput = getByLabelText("Task Title:");
  const sumbitBtn = queryByText("Create Task");
  // enter data in the form and create two (2) tasks
  fireEvent.change(textInput, { target: { value: "Test Task 1" } });
  fireEvent.click(sumbitBtn);
  fireEvent.change(textInput, { target: { value: "Test Task 2" } });
  fireEvent.click(sumbitBtn);

  expect(queryByText("Test Task 1")).toBeInTheDocument();
  expect(queryByText("Test Task 2")).toBeInTheDocument();
  expect(queryAllByText("Complete").length).toEqual(3);
  // delete task 1
  const deleteTaskOne = queryAllByText("Delete")[1];
  fireEvent.click(deleteTaskOne);
  expect(queryByText("Test Task 1")).not.toBeInTheDocument();
  // complete task 2
  const completeTaskTwo = queryAllByText("Complete")[1];
  fireEvent.click(completeTaskTwo);
  expect(queryByText("Test Task 2")).not.toBeInTheDocument();
});
