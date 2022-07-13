import React from "react";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {


  return (
    <main>
      <Outlet />
      <div>
        <Link to={'/'}>Главная</Link>
          <Link to={'/'}>QR</Link>
        <Link to={'/'}>Профиль</Link>
      </div>
    </main>
  )
}

export {Layout};
