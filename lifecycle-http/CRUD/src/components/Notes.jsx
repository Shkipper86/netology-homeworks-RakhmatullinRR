import { useEffect, useState } from "react"

export const Notes = () => {

  const [notesData, setNotesData] = useState([])
  const [newNote, setNewNote] = useState('')

  const getNotes = () => {
    fetch('http://localhost:7070/notes')
    .then(response => response.json())
    .then(data => setNotesData(data))
  }

  const addNote = () => {
     const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: notesData.length, content: newNote})
     }
     fetch('http://localhost:7070/notes', options)
     .then(() => {
      getNotes()
      setNewNote('')
    })
  }

  const deleteNote = (id) => {
    fetch(`http://localhost:7070/notes/${id}`, {method: 'DELETE'})
    .then(() => {getNotes()})
  }

  useEffect(() => {
    getNotes()
  }, [])

  const renderNotes = notesData.map(note => {
    return (
      <div key={note.id}>
        <textarea value={note.content} readOnly></textarea>
        <button type="button" onClick={() => deleteNote(note.id)}>Удалить</button>
      </div>
    );
  })

  return (
    <div className="main-container">
      <div className="update">
        <h3>Notes</h3>
        <button type="button" onClick={getNotes}>Обновить</button>
      </div>
      <div className="notes-container">{renderNotes}</div>
      <div className="add-note">
        <textarea
        placeholder="Введите текст"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
        <button type="button" onClick={addNote} disabled={newNote == ''}>Добавить</button>
      </div>
    </div>
  );
}
