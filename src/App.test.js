
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import Reservation from './Reservation'; // Replace './Reservation' with your actual path
import Reservation from "./Components/Reservations";


describe('Reservation component', () => {
  test('should render the reservation form', () => {
    render(<Reservation />);

    expect(screen.getByText('Reserving a Table')).toBeInTheDocument();
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests:')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();

    // Add similar checks for other form fields
  });

  test('should update name state on input change', () => {
    render(<Reservation />);
    const nameInput = screen.getByLabelText('Name:');
    userEvent.type(nameInput, 'John Doe');
    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
  });

  test('should update email state on input change', () => {
    render(<Reservation />);
    const emailInput = screen.getByLabelText('Email:');
    userEvent.type(emailInput, 'abc@gmail.com');
    expect(screen.getByDisplayValue('abc@gmail.com')).toBeInTheDocument();
  });
  test('should update date state on input change', () => {
    render(<Reservation />);
    const dateInput = screen.getByLabelText('Date:');
    userEvent.type(dateInput, '2024-06-03');
    expect(screen.getByDisplayValue('2024-06-03')).toBeInTheDocument();
  });
  test('should update time state on input change', () => {
    render(<Reservation />);
    const timeInput = screen.getByLabelText('Time:');
    userEvent.type(timeInput, '10:00');
    expect(screen.getByDisplayValue('10:00')).toBeInTheDocument();
  });

  test('should update guest state on input change', () => {
    render(<Reservation />);
    const guestInput = screen.getByLabelText('Number of Guests:');
    userEvent.type(guestInput, '5');
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });

  test('should update Occasion state on input change', () => {
    render(<Reservation />);
    const occasionInput = screen.getByLabelText('Occasion:');
    userEvent.selectOptions(occasionInput, 'birthday');
    expect(occasionInput.selectedOptions[0].value).toBe('birthday');
  });

});
