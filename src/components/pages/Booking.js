import React, { useReducer } from "react";
import "./Booking.css";
import BookingForm from "../sections/reservePages/BookingForm";
import { fetchAPI } from "../../bookingsAPI";;


const reducer = (state, action) => {
  switch (action.type) {
    case "update_times":
      return {
        ...state,
        availableTimes: updateTimes(action.selectedDate),
      };
    default:
      return state;
  }
};

export function updateTimes(selectedDate) {
  const date = new Date(selectedDate);
  return fetchAPI(date);
}

export function initializeTimes() {
  return {
    availableTimes: fetchAPI(new Date()),
  };
}

function Reservation() {
  const [state, dispatch] = useReducer(reducer, initializeTimes());

  return (
    <div className="container">
      <div id="booking" className="booking">
        <div className="booking-grid">
          <div className="booking-left">
            <h1>Reserve a table</h1>
            <h4>Reserve your table at Little Lemon Today!</h4>
            <div className="booking-form">
              <BookingForm dispatch={dispatch} state={state} />
            </div>
          </div>
          <div className="booking-right">
            <p>
            Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;