import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReactDatePicker from "react-datepicker";
import { DateLocalizer } from "react-big-calendar";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  const { eventData } = props;
  const [editedEvent, setEditEvent] = React.useState(eventData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            placeholder={eventData.title}
            value={editedEvent.title}
            onChange={(event) =>
              setEditEvent({ ...editedEvent, ["title"]: event.target.value })
            }
          />
          <ReactDatePicker
            placeholderText="Start Date"
            className="form-control"
            value={editedEvent.start}
            selected={editedEvent.start}
            onChange={(start) => setEditEvent({ ...editedEvent, start })}
          />
          <ReactDatePicker
            placeholderText="End Date"
            className="form-control"
            value={editedEvent.end}
            selected={editedEvent.end}
            onChange={(end) => setEditEvent({ ...editedEvent, end })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
