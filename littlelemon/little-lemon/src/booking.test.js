import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './App';

// ============================================================================
// STEP 1: Test for Static Text Rendered in the BookingForm Component
// ============================================================================
test('Renders the BookingForm heading or labels correctly', () => {
  const mockTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();

  // Render directly without wrapping in a Router
  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  const labelElement = screen.getByText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});

// ============================================================================
// STEP 2: Test the initializeTimes and updateTimes Reducer Core Functions
// ============================================================================
describe('Booking State Reducer Functions', () => {
  
  test('initializeTimes returns the correct initial time slots array', () => {
    const expectedInitialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedInitialTimes);
  });

  test('updateTimes returns the same values provided in the state payload context', () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: '2026-05-25' };
    
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
  });

});