import React from "react";
import Tweet from './Tweet';

function App() {

  return (
    <div className="app" >
      <Tweet name="Smith" message="This evening is enjoyable."/>
      <Tweet name="Sara" message="This evening is little busy."/>
      <Tweet name="John" message="This evening is beautiful."/>
      <Tweet name="Jay" message="This evening is rainy."/>
    </div>
  );
}

export default App;
