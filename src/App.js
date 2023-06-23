import React from "react"
import Laptops from "./Laptops"
import Phones from "./Phones"
import Project from "./Project"

function App() {

  const [selectedProject, setSelectedProject] = React.useState({});

  return (
    <div>
      <img className="app--background" src="./background.jpg" />
      {selectedProjectId==-1?
        <div className="app--devices"> 
          <Laptops setSelectedProject={setSelectedProject}/>
          <Phones setSelectedProject={setSelectedProject} />
        </div>
      :
        <Project/>
      }
    </div>
  )
}

export default App;
