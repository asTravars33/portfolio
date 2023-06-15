import React from "react"

function App() {

  const [selectedProjectId, setSelectedProjectId] = React.useState(-1);

  return (
    <div>
      <img className="app--background" src="./background.png" />
      {selectedProjectId==-1?
        <div className="app--devices"> 
          <Laptops setSelectedProjectId={setSelectedProjectId}/>
          <Phones setSelectedProjectId={setSelectedProjectId}/>
        </div>
      :
        <Project/>
      }
    </div>
  )
}

export default App;
