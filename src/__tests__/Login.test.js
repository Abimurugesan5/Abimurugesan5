/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/prefer-find-by */
import React from "react";
import { render, fireEvent, waitFor ,waitForElement} from "@testing-library/react";
import AntForm from "../components/Login";

global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
it("items are visible",()=>{
  const{getByText,getByTestId}=  render(<AntForm/>)
  const username=expect(getByTestId("user")).toBeVisible()  
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const passwords=expect(getByTestId("password")).toBeVisible()  
  const form=   expect(getByText("Demo Form")).toBeInTheDocument()
 const submit=   expect(getByText("Submit")).toBeInTheDocument()

})

it("renders error message when submitting the form without a username and password", async () => {
	const { getByText } = render(<AntForm />);
	fireEvent.click(getByText("Submit"));
	await waitFor(() => getByText(/username required/i));
    await waitFor(() => getByText(/password! required/i));

});

it("renders complete after successful form submission", async () => {
	const { container, getByText } = render(<AntForm />);
	const input = container.querySelector("#test_username");
    const input1 = container.querySelector("#test_password");
	expect(input).toBeInTheDocument();
    expect(input1).toBeInTheDocument()
	fireEvent.change(input, { target: { value: "myvalue" } });
    fireEvent.change(input1, { target: { value: "myvalues" } });

	fireEvent.click(getByText("Submit"));
	await waitFor(() => getByText("Complete"));
});
