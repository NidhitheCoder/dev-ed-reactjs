import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Smith", message: "This evening is enjoyable.", likes: "120k" },
    { name: "Sara", message: "This evening is little busy.", likes: "135k" },
    { name: "John", message: "This evening is beautiful.", likes: "111k" },
    { name: "Jay", message: "This evening is rainy.", likes: "220k" }
  ]);
  return (
    <div className="app">
      {users.map(user => {
        return (
          <Tweet name={user.name} message={user.message} likes={user.likes} />
        );
      })}
    </div>
  );
}

export default App;
