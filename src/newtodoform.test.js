import { fireEvent, render } from "@testing-library/react";
import NewTodoForm from "./newtodoform";

// Smoke
test("renders learn react link", () => {
  render(<NewTodoForm />);
});

// Snapshot
test("Matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic
test("Can enter data", () => {
  // render the component
  const { getByLabelText } = render(<NewTodoForm />);
  const textInput = getByLabelText("Task Title:");
  // enter data in the form
  fireEvent.change(textInput, { target: { value: "Test Components" } });
  // expect the input data to be in the form
  const inputVal = getByLabelText("Task Title:");
  expect(inputVal.value).toEqual("Test Components");
});
