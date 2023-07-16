import React,{useState} from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'
import Search from '../Search/Search';
const NoteContainer = (props) => {
    const [searchText,setSearchText]=useState('');

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

    const filteredNotes = notes.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className="note-container custom-scroll">
        <h1>Notes</h1>
        <Search handleSearchNote={setSearchText}/>
        <div className="note-container_notes">
            {filteredNotes.length > 0 ? (
          filteredNotes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes Present..</h3>
        )}
        </div>
    </div>
  )
}

export default NoteContainer