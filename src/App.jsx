import React, { useState } from 'react';
import Header from './assets/components/Header';
import Location from './assets/components/Location';

const App = () => {
  //Condiciones Iniciales
  const idRandom = () => {
    let random = Math.floor(Math.random() * (126 - 1) + 1);
    return random;
  };
  //id aleatorio y por input
  const [idLocation, setIdLocation] = useState(idRandom());

  //Funcion handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputLocation = form.id;
    if (inputLocation.value !== '') {
      setIdLocation(inputLocation.value);
    } else {
      setIdLocation(0);
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900   min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input placeholder="Ingrese valor entre 1-126" type="text" id="id" />
          <input
            type="submit"
            value="Search"
            className="rounded-xl border-sky-300 border-2 p-2 font-bold hover:bg-gray-400 bg-white m-4"
          />
        </form>
      </div>
      <Location idLocation={idLocation} />
    </div>
  );
};

export default App;
