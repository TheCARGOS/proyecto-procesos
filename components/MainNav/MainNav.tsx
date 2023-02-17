import React from 'react'

const MainNav = () => {
  return (<nav className="border-2 border-slate-500 flex flex-col text-md text-slate-500">
    <h3 className="border border-slate-700 leading-loose pl-3">Panel de Administración</h3>
    
    <ul className="pl-3">
      <li className="cursor-pointer">Usuarios</li>
      <li className="cursor-pointer">Clientes</li>
      <li className="cursor-pointer">Productos</li>
    </ul>


  </nav>)
}

export default MainNav
