import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'
const NoteContainer = (props) => {
    const reverseArray=(arr)=>{
        if (!arr || !Array.isArray(arr)) {
            return []; 
          }
        const array=[]
        for(let i=arr.length -1;i>=0;--i){
            array.push(arr[i]);
        }

        return array;
    };
    const notes=reverseArray(props.notes);
  return (
    <div className="note-container custom-scroll">
        <h2>Notes</h2>
        <div className="note-container_notes">
            {notes?.length>0 ?
                notes.map((item)=>(
                    <Note
                    key={item.id}
                    note={item}
                    deleteNote ={props.deleteNote}
                    updateText = {props.updateText}
                    />
                )): <h3>No Notes Present..</h3>
            }   
        </div>
    </div>
  )
}

export default NoteContainer