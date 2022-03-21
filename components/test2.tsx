import error from "next/error";
import React, { FC, useState } from "react";

interface ICrypto {
  id: number;
  name: string;
  age: number;
}

let defaultProps : ICrypto[] = [
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


const Dashboard: React.FC = () => {
  const [crypto, setCryptos]: [ICrypto[], (posts: ICrypto[]) => void] =
    React.useState(defaultProps);
  const [search, setSearch]: [string, (search: string) => void] =
    React.useState("");

  return (
    <div>
      <ul>
        <input
        placeholder="Filter" 
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {crypto.map((crypto) => {
            if(search == "" || crypto.name.toLowerCase().includes(search.toLowerCase())) {
                return(
                    <li  className=" list-none flex justify-between" key={crypto.id}>
                        <h3>{crypto.name}</h3>
                        <p>{crypto.age}</p>
                    </li>
                );
            }
            return null;
        })}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};
export default Dashboard;
