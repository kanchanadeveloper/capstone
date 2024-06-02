import { act, render, screen } from '@testing-library/react';
import Reservation from './Components/Reservations';


test("reserve a table", async () => { // Use async for potential asynchronous operations
  const name = "ABCD";
  const email = "ABCD@gmail.com";
  const date = "12-06-2024";
  const time = "19:58";
  const guests = "10";
  const occasion = "birthday";

  const handleSubmit = jest.fn(); // Mock function for form submission

  // Wrap the rendering and user interaction in an `act` call
  await act(async () => {
    render(<Reservation onSubmit={handleSubmit} />);

    const rangename = screen.getByLabelText(/Name:/);
    fireEvent.change(rangename, { target: { value: name } });

    const rangeEmail = screen.getByLabelText(/Email:/);
    fireEvent.change(rangeEmail, { target: { value: email } });

    const rangeDate = screen.getByLabelText(/Date:/);
    fireEvent.change(rangeDate, { target: { value: date } });

    const rangeTime = screen.getByLabelText(/Time:/);
    fireEvent.change(rangeTime, { target: { value: time } });

    const rangeInput = screen.getByLabelText(/Number of Guests:/);
    fireEvent.change(rangeInput, { target: { value: guests } });

    const textArea = screen.getByLabelText(/Occasion:/);
    fireEvent.change(textArea, { target: { value: occasion } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  });

  // Assertion after all asynchronous operations are complete
  expect(handleSubmit).toHaveBeenCalledWith({
    name,
    email,
    date,
    time,
    guests,
    occasion
  });
});