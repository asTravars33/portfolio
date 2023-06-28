import React from "react"
import Laptops from "./Laptops"
import Phones from "./Phones"
import Project from "./Project"
import {
  onSnapshot
} from "firebase/firestore"
import { phoneCollection, webCollection } from "./firebase"

function App() {

  const [selectedProjectId, setSelectedProjectId] = React.useState(-1);
  const [phoneProjects, setPhoneProjects] = React.useState([]);
  const [webProjects, setWebProjects] = React.useState([]);

  React.useEffect(() => {
    const unattacher = onSnapshot(phoneCollection, function(snapshot){
      const phonesArr = snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setPhoneProjects(phonesArr)
    })
    return unattacher
  }, [])

  React.useEffect(() => {
    const unattacher = onSnapshot(webCollection, function(snapshot){
      const webArr = snapshot.docs.map( doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setWebProjects(webArr)
    })
    return unattacher
  }, [])

  return (
    <div>
      <img className="app--background" src="./background.jpg" />
      {selectedProjectId==-1?
        <div className="app--devices"> 
          <Laptops data = {webProjects} setSelectedProjectId={setSelectedProjectId}/>        
          <Phones data = {phoneProjects} setSelectedProjectId={setSelectedProjectId} />
        </div>
      : 
        <Project/>
      }
    </div>
  )
}

export default App;
