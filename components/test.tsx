import React, { FC, useState } from "react";

interface IUsers {
  id: number;
  name: string;
  age: number;
}

let data: IUsers[] = [
  { id: 1, name: "Andy", age: 32 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Tom Hulk", age: 40 },
  { id: 4, name: "Tom Hank", age: 50 },
  { id: 5, name: "Audra", age: 30 },
  { id: 6, name: "Anna", age: 68 },
  { id: 7, name: "Tom", age: 34 },
  { id: 8, name: "Tom Riddle", age: 28 },
  { id: 9, name: "Bolo", age: 23 },
];

function list() {
  return data;
}

const Test: FC = ({ ...props }) => {
  const users = list();

  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(users);

  const filter = (e : any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };

  return (
    <div>
      <input type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter" />

      <div>
        {users && users.length > 0 ? (
        users.map((user) => (
          <ul key={user.id}>
            <li className=" list-none flex justify-between">
              <span className=" mx-4">{user.id}</span>
              <span className="mx-8">{user.name}</span>
              <span className="">{user.age} year old</span>
            </li>
          </ul>
        ))
        ) : (
            <h1>No results found!</h1>
        )
    }
      </div>
    </div>
  );
};

export default Test;
