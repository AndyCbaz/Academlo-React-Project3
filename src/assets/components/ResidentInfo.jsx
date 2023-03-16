import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loader from './Loader/Loader';
//constante reactiva que almacena los valores de cada residente

const ResidentInfo = ({ urls }) => {
  const [residentInfo, setResidentInfo] = useState([]);

  // console.log(urls);
  const fetchApisResident = (apis) => {
    return apis.map(async (api) => {
      try {
        const res = await axios.get(api);
        return res;
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    Promise.all(fetchApisResident(urls)).then((allData) => {
      setResidentInfo(allData);
    });
  }, [urls]);
  console.log(residentInfo);
  return (
    <>
      {!urls ? (
        <div className="flex flex-col items-center pt-64">
          <Loader />
        </div>
      ) : (
        residentInfo.map((e, index) => (
          <div className="border-violet-400 border-4 rounded-xl w-48" key={e}>
            <div className="text-white text-md">
              <div>
                <img
                  className="rounded-xl"
                  src={e.data.image}
                  alt={`Foto ${index}`}
                ></img>
              </div>
              <div>
                <span className="font-bold text-sky-500">Nombre: </span>
                {e.data.name}
              </div>
              <div>
                <span className="font-bold text-sky-500">Status: </span>
                {e.data.status}
              </div>
              <div>
                <span className="font-bold text-sky-500">Lugar de Origen: </span>
                {e.data.origin.name}
              </div>
              <div>
                <span className="font-bold text-sky-500">Aparicion en Episodios: </span>
                {e.data.episode.length}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ResidentInfo;
