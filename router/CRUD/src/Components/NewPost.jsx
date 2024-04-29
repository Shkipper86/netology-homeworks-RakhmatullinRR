import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NewPost = () => {

    const [text, setText] = useState('')

    const navigate = useNavigate()

    const testInputText = (text) => {
        /^[A-Za-z0-9 _-]+$/.test(text) && setText(text)
     }

    const addPost = async () => {
        const options = {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({id: 0, content: text})
        }
        await fetch('http://localhost:7070/posts', options)
     }

     const newPost = async () => {
        await addPost()
        return navigate("/")
     }
     
  return (
    <div className='new-post'>
      <Link to={'/'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </Link>
      <textarea className='new-post__input'  value={text} onChange={(e) => testInputText(e.target.value)} />
      <button type="button" onClick={newPost}>
        Опубликовать
      </button>
    </div>
  );
}
