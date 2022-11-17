/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Heading from "../components/Heading";
import userEvent from "@testing-library/user-event";
global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
test("Header contains correct text", () => {
 const{getByText}= render(<Heading />);
  const text = screen.getByText("Login Form");
  expect(text).toBeInTheDocument();
  const name = screen.getByText("Username");
  expect(name).toBeInTheDocument()
  const password = screen.getByText("Password");
  expect(password).toBeInTheDocument()
  const select = screen.getByText("Select");
  expect(select).toBeInTheDocument()
  const gender = screen.getByText("Gender")
  expect(gender).toBeInTheDocument()
  const login = screen.getByText("Log in");
  expect(login).toBeInTheDocument()
});
test('input values typing', () => {
  const {getByLabelText, getByRole,getByText,getByTestId} = render(<Heading/>);
  const name = screen.getByText("Username");
  userEvent.type(name,"testing")
  const password = screen.getByText("Password");
  userEvent.type(password,"aaa");

})
test('selction testing',async()=>{
const mockCallback = jest.fn()
const {getByLabelText,getByTestId,getByText,queryAllByText}=render(<Heading/>
)
expect(queryAllByText("Lucy").length).toBe(1);
expect(queryAllByText("Jack").length).toBe(0);
fireEvent.click(getByText("Lucy"));

})
test("radio option test",async()=>{
  const{getByText,getByTestId}= render(<Heading/>)
  const allValueRadioButton = getByText("Female");
  userEvent.click(allValueRadioButton)
})
test ("button submit testing",async()=>{
  const{getByText,getByTestId} = render(<Heading/>)
  const submitbtn= getByText("Log in")
  userEvent.click(submitbtn)
  // expect(submitbtn).toHaveBeenCalledTimes(1)
})