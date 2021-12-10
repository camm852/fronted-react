import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

const Reportes = () => {
    return (
        <Sidebar>
            <div class="crud-container">
                <div class="crud users">
                    <div class="selects">
                        {/* <a href="/listaUsuarios" class="select-crud select-actualizar"><p><i class="fas fa-user-plus"></i><br/>Listado de usuarios</p></a>
                        <a href="/listaClientes" class="select-crud select-actualizar"><p><i class="fas fa-user-cog"></i><br/>Listado de clientes</p></a>
                        <a href="/listaVentas" class="select-crud select-actualizar"><p><i class="fas fa-search"></i><br/>Ventas por cliente</p></a> */}
                        <Link to="/Reportes/ListaClientes" className="select-crud select-actualizar"><p><i class="fas fa-user-plus"></i><br/>Listado de clientes</p></Link>
                        <Link to="/Reportes/ListaVentas" className="select-crud select-actualizar"><p><i class="fas fa-search"></i><br/>Ventas por cliente</p></Link>
                    </div>
                </div> 
            </div>
        </Sidebar>
    )
}

export default Reportes
