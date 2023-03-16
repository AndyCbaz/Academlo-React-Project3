import React from 'react';
import encabezado from '../header-img.jpg';

const Header = () => {
  return (
    <div>
      <div className="pt-4 flex justify-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <img src={encabezado} alt="encabezado de rick" className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
