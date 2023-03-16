import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import axios from 'axios';
import Loader from './Loader/Loader';

const Location = ({ idLocation }) => {
  //id informacion
  const [idInformation, setIdInformation] = useState(null);

  //url base
  const baseURL = `https://rickandmortyapi.com/api/location/${idLocation}`;
  //url
  //Funcion que solicita los datos de la API
  const fetcthInformation = async () => {
    try {
      const res = await axios.get(baseURL);
      setIdInformation(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcthInformation();
  }, [idLocation]);

  return (
    <div className="">
      {!idInformation ? (
        <div className="flex flex-col items-center pt-64">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex justify-center self-end items-start">
            <div className="rounded-3xl parent text-white text-center p-4">
              <span className="div1 font-bold text-2xl">{idInformation.name}</span>
              <span className="div2 text-xl">
                <span className="font-bold ">Tipo:</span> {idInformation.type}
              </span>
              <span className="div3 text-xl">
                <span className="font-bold">Dimensión: </span>
                {idInformation.dimension}
              </span>
              <span className="div4 text-xl">
                <span className="font-bold">Poblacion: </span>
                {idInformation.residents.length}
              </span>
            </div>
          </div>

          <div className="flex justify-center border-pink-400 border-4 rounded-2xl mt-4 p-2 flex-wrap gap-8">
            <ResidentInfo urls={idInformation.residents} />
          </div>
        </>
      )}
    </div>
  );
};

export default Location;
