import { useState } from "react";

  // Props
    interface ListGroupProps{
        cities:string[];
        heading:string;
        onSelectedItem:(item:string) =>void;
    }
function ListGroup({cities,heading,onSelectedItem}:ListGroupProps) {

    
    // event handler
    const [selectedIndex,setSelectedIndex]= useState(-1); 

    return <>
        <h1>{heading}</h1>
        {cities.length === 0 && <p>No item Found.</p>}
        <ul className="list-group">
        {cities.map((city,index) =>(
            <li className={selectedIndex === index ?"list-group-item active":"list-group-item"}
             onClick={() => {
                setSelectedIndex(index);
                onSelectedItem(city);

             }}
             key={city}>{city}</li>
        ))}
        </ul>;
    </>
}

export default ListGroup;