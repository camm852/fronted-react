import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'


const Cliente = () => {
    return (
        <Sidebar>
            <div className="crud-container">
                    <div className="selects">
                        <Link to="AgregarCliente" className="select-crud"><p><i className="fas fa-user-plus"></i><br/>Agregar Cliente</p></Link>
                        <Link to="/Clientes/ActualizarCliente" className="select-crud"><p><i className="fas fa-user-cog"></i><br/>Actualizar Cliente</p></Link>
                        <Link to="/Clientes/ConsultarCliente" className="select-crud"><p><i className="fas fa-search"></i><br/>Consultar Cliente</p></Link>
                        <Link to="/Clientes/EliminarCliente" className="select-crud"><p><i className="fas fa-user-minus"></i><br/>Eliminar Cliente</p></Link>
                    </div>
            </div>
        </Sidebar>
    )
}

export default Cliente
