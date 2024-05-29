import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { readUserProfile } from "../../../stor/slices/authentication";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { readDrProfile } from "../../../stor/slices/doctor";

const Availability = () => {
  const [show, setShow] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [slotDuration, setSlotDuration] = useState("");
  const [slots, setSlots] = useState([]);
  const doctor = useSelector((state) => state.doctor.doctor.doctor);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readDrProfile());
  }, [dispatch]);
  const handleSubmit = (event) => {
    event.preventDefault();
    createSlots();
    handleClose();
  };

  const createSlots = () => {
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    const duration = parseInt(slotDuration, 10);

    const newSlots = [];
    let currentTime = start;

    while (currentTime < end) {
      const nextTime = new Date(currentTime.getTime() + duration * 60000);
      newSlots.push({
        start: currentTime.toTimeString().slice(0, 5),
        end: nextTime.toTimeString().slice(0, 5),
      });
      currentTime = nextTime;
    }

    setSlots(newSlots);
  };

  const sendSlotsToApi = async () => {
    const id = doctor._id;
    if (!id) {
      return toast.error("something went worng, Plz refresh the page");
    }
    try {
      await axios.put(`http://localhost:7000/doctors/${id}`, { slots });
      toast.success("Slots updated successfully");
    } catch (error) {
      console.error("Error updating slots:", error);
      toast.error("Failed to update slots");
    }
  };

  return (
    <div className="container">
      <button className="btn btn-primary m-2" onClick={handleShow}>
        set availability
      </button>
      <button className="btn button1 m-2" onClick={sendSlotsToApi}>
        Uplaod availability
      </button>

      <div className={`modal ${show ? "d-block" : "d-none"}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Slots</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="startTime">Start Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endTime">End Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="slotDuration">Slot Duration (minutes)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="slotDuration"
                    value={slotDuration}
                    onChange={(e) => setSlotDuration(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Create Slots
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h3>Slots</h3>
        <ul className="list-group">
          {slots.map((slot, index) => (
            <li key={index} className="list-group-item">
              {slot.start} - {slot.end}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Availability;
