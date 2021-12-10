import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

const Proveedor = () => {
    return (
        <Sidebar>
            <div className="crud-container">
                    <div className="selects">
                        <Link to="/Proveedores/AgregarProveedor" className="select-crud"><p><i className="fas fa-user-plus"></i><br/>Agregar Proveedores</p></Link>
                        <Link to="/Proveedores/ActualizarProveedor" className="select-crud"><p><i className="fas fa-user-cog"></i><br/>Actualizar Proveedores</p></Link>
                        <Link to="/Proveedores/ConsultarProveedor" className="select-crud"><p><i className="fas fa-search"></i><br/>Consultar Proveedores</p></Link>
                        <Link to="/Proveedores/EliminarProveedor" className="select-crud"><p><i className="fas fa-user-minus"></i><br/>Eliminar Proveedores</p></Link>
                    </div>
            </div>
        </Sidebar>
    )
}

export default Proveedor
