import '../styles/CustomerAppointments.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiUrl } from 'src/components/global/api';

function CustomerAppointments() {
  const [booking, setBooking] = useState<[]>([]);
  
  useEffect(() => {
    const fetchBookings = async () => {
      
      const response = await axios.get(`${apiUrl}booking/allbookings`);
      const completedBookings = response.data;
      
      setBooking(completedBookings);
    };
    fetchBookings();
  }, [booking]);
  
  return (
    <div className="customer-containers">
      <div className="appointments-header">
        <h2><span className="colored-word">Booked</span> appointments</h2>
      </div>
      <table className="appointments-container-table">
        <thead>
          <tr className="appointments-table-header">
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            <th>Cleaner</th>
          </tr>
        </thead>
        <tbody>
          {booking.filter((bookingArray) => bookingArray.customername === name).map((booking, index) =>  (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.level}</td>
              <td>{booking.cleanername}</td>

              <th className="appointments-button-th">
                <button 
                  id={booking._id} 
                  className="appointments-small-delete-button"
                  onClick={() => handleSingleDelete(booking)}>Cancel
                </button>
              </th>

              <th className="appointments-button-th">
                <input 
                  className="appointments-tr-input" 
                  id={booking._id} type="checkbox" 
                  checked={resetAllCheckBoxes ? false : checkedRows.includes(booking._id)} 
                  onClick={() => HandleChecked(booking._id)}>
                </input>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="appointments-delete-container">
        <button id="appointments-delete-button" onClick={() => handleDelete(checkedRows)}>Cancel Selected</button>
      </div>
    </div>
  );
}
  

export default CustomerAppointments;