import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const Posts = () => {

    const [posts, setPosts] = useState([])

    const get = () => {
        fetch('http://localhost:7070/posts')
        .then((response) => response.json())
        .then(data => setPosts(data))
    }

    useEffect(() => {
        get()
    }, [])


    const postsList = posts.map(post => {
        return (
          <Link to={`/${post.id}`} key={post.id}>
            <div className="post-card">
              <div className="userInfo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>{" "}
                <div>
                  <div className="user-name">Иванов Иван</div>
                  <div className="post-created">
                    Основатель группы {new Date(post.created).toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <div className="post">{post.content}</div>
            </div>
          </Link>
        );
    })

  return (
    <div className="main-container">
      <div className="create-block">
        <Link to={"/new"}>
          <button type="button">Создать пост</button>
        </Link>
      </div>
      <div className="posts-container">{postsList}</div>
    </div>
  );
}
