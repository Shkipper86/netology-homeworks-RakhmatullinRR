import { useEffect, useState } from "react"
import { Details } from "./Details"

export const List = () => {

    const [userList, setUserList] = useState([])
    const [selectedUserId, setSelectedUserid] = useState(-1)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ')
        .then(response => response.json())
        .then(data => setUserList(data))
    }, [])

    const list = userList.map(user => {
        return (
          <span
            key={user.id}
            className={
              user.id === selectedUserId
                ? "userlist-item active"
                : "userlist-item"
            }
            onClick={() => setSelectedUserid(user.id)}
          >
            {user.name}
          </span>
        );
    })

  return (
    <div className="main-container">
      <div className="user-table">{list}</div>
      {selectedUserId != -1 && <Details userId = {selectedUserId}/>}
    </div>
  );
}
