import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import Button from '@mui/material/Button';
import { ToastContainer, Zoom, toast, Bounce, Slide, Flip, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PopUp from "../Modals";
import FormDialog from "../Modals/dialog";




const locales = {
    "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format, parse, startOfWeek, getDay, locales
})

const events = [{
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 7, 26),
    end: new Date(2023, 7, 26),
},
{
    title: "Vacation",
    allDay: true,
    start: new Date(2023, 7, 27),
    end: new Date(2023, 7, 27)
}, {
    title: "Party",
    start: new Date(2023, 7, 28),
    end: new Date(2023, 7, 30)
}]

const AdminCalendar = () => {
    const [newEvent, setNewEvent] = useState({
        title: "", start: "", end: ""
    })
    const [allEvents, setAllEvents] = useState(events)
    const [eventSelected,setEventSelected] = useState(false)
    
    const [editEvent, setEditEvent] = useState([])
    

    const toastSuccess = () => {
        if (newEvent) {
            toast.success(`Event Added Successfully`, {
                transition: Slide,
            });
        }

    };

    function handleAddEvent() {
        if (!newEvent.title) {
            toast.error(`Title is Required`, {
                transition: Bounce,

            })
        }
        else if (!newEvent.start || !newEvent.end) {
            toast("Please Select Dates", {
                transition: Slide,

            })
        }
        else {
            // Show success toast after updating events
            setAllEvents([...events, newEvent]);
            setTimeout(() => {
                toastSuccess()
            }, 0.9000)
            setNewEvent([])
        }

    }

    const NewEvent = () => {
        return (
            <>
                <h4 className="text-center">Add New Event</h4>
                <div className="d-flex justify-content-center">
                    <input type="text" placeholder="Add Title" style={{ height: "30px", marginRight: "10px" }}
                        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <ReactDatePicker placeholderText="Start Date"
                        selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />

                    <ReactDatePicker placeholderText="End Date"
                        selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

                    <Button variant="contained" style={{ marginLeft: "10px" }} size="small" onClick={handleAddEvent}>Add Event</Button>
                    <ToastContainer />
                </div>
            </>
        )
    }

    const selectedEvent = (e)=>{
       console.log(e)
       setEventSelected(!eventSelected)
       if(eventSelected===true){
        setEditEvent(e)
       }
      
       
    }

    return (
        <>
            <div><h2 className="bold">Admin Calendar</h2>

                <div className="d-flex justify-content-end mx-5">
                    <Fab variant="extended" size="small" color="primary" aria-label="add" >
                        <PopUp data={NewEvent} icon={<AddIcon/>}/>
                    </Fab>

                </div>

                {/* <Fab variant="extended" size="small" color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                <h4 className="text-center">Add New Event</h4>
                <div className="d-flex justify-content-center">
                    <input type="text" placeholder="Add Title" style={{ height: "30px", marginRight: "10px" }}
                        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <ReactDatePicker placeholderText="Start Date"
                        selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />

                    <ReactDatePicker placeholderText="End Date"
                        selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

                    <Button variant="contained" style={{ marginLeft: "10px" }} size="small" onClick={handleAddEvent}>Add Event</Button>
                    <ToastContainer />
                </div> */}
                <Calendar localizer={localizer} events={allEvents} startAccessor="start"
                    endAccessor="end" style={{ height: 400, margin: "50px" }}
                    onSelectEvent={(e) => selectedEvent(e)}
                />

            {eventSelected?<FormDialog eventData={editEvent} />:""}
            </div>

        </>
    )
}

export default AdminCalendar