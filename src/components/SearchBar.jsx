import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  //defino mi estado local cities y su función seteadore setCities
  //el valor inicial de cities será el value vacio
  const [cities, setCities] = useState("");
  //defino la funcion seteadora setCities que es llamada por la funcion
  //handleInputChange que es activada por el onChange del input
  const handleInputChange = (e) => {
    //prevengo que se recargue la pagina en el submit
    e.preventDefault();
    //el valor de cities es ahora lo que se le pasa por el input
    setCities(e.target.value);
  };

  const onSubmitForm = (e) => {
    //prevengo que se recargue la pagina en el submit
    e.preventDefault();
    //llamo a la funcion onSearch pasandole el valor de cities
    onSearch(cities);
  }
  return (
    //llamo en el evento onChange a la funcion handleInputChange que luego llamara
    //a la funcion setCities
    <form onSubmit={(e) => onSubmitForm(e)}>
      <input 
        type="text" 
        placeholder="City..." 
        onChange={e => handleInputChange(e)} 
      />
      <input className="button" type="submit" value="Search" />
    </form>
  );
}