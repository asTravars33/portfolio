import React from "react"
import Laptops from "./Laptops"
import Phones from "./Phones"
import Project from "./Project"

function App() {

  const [selectedProjectId, setSelectedProjectId] = React.useState(-1);

  return (
    <div>
      <img className="app--background" src="./background.jpg" />
      {selectedProjectId==-1?
        <div className="app--devices"> 
          <Laptops setSelectedProjectId={setSelectedProjectId}/>
        </div>
      :
        <Project/>
      }
    </div>
  )
}

export default App;
