import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App(){

   // handle alert visible
  const [alertVisible,setAlertVisibility] = useState(false);

  // list of items ,cities
  let cities=["Nairobi","Kisumu","Namanga","Kericho","Mombasa","Mayole"];

  const handleSelectedItem =(item:string) => {
    console.log(item);

  
  }
  return <div>
      <ListGroup 
      cities={cities} 
      heading="Cities in Kenya" 
      onSelectedItem={handleSelectedItem}/>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>

        My Alert</Alert>}
      <Button color="danger" onClickButton={()=>setAlertVisibility(true)}>
        Click me,I am Button!
      </Button>
  </div>
}

export default App;