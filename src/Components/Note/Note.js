import React from "react";
import "./Note.css";
import UseAnimations from "react-useanimations";
import trash2 from "react-useanimations/lib/trash2";
const Note = (props) => {
  let timer = 500,
    timeout;
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    let year = date.getFullYear();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} , ${day} ${month} ${year}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
  
  const updateTitle = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <input
        className="note_title"
        defaultValue={props.note.title}
        onChange={(event) => updateTitle(event.target.value, props.note.id)}
        placeholder="Title"
      />
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)} </p>
        <span className="icon" onClick={() => props.deleteNote(props.note.id)}>
          <UseAnimations animation={trash2} size={30} />
        </span>
      </div>
    </div>
  );
};

export default Note;
