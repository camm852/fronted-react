import axios from 'axios'
import React from 'react'
import Sidebar from "../sidebar/Sidebar"


const ReportesClientes = () => {

    
    const [clientes,setClientes] = React.useState([{}])

    const consultarClientes = async (e) =>{
            e.preventDefault()
            const res= await axios.get(`http://localhost:8082/Clientes`)
            const datos = res.data
            setClientes(datos)
            console.log(datos)
            console.log(clientes)
            
            // Swal.fire({
            //     title: "¡Algo ha salido mal!",
            //     text: "Ha ocurrido un error",
            //     icon:  "error"
            // })
        
    }

    return (
        <Sidebar>
            <div className="producto-container">
                <div className="tittle-producto-container tittle-cliente">
                    <h2 className="tittle">Listado de clientes</h2>
                    <form name="consultaClienteForm" onSubmit={consultarClientes} method="get">
                        <button className="btn" id="boton-consultar" onClick={consultarClientes}>Mostrar</button>
                    </form>
                </div>
                <div id="main-container">
                    <table name="tablaProducto">
                        <thead id="cabecera">
                            <tr>
                                <th className="izquierda">cedula</th>
                                <th>direccion</th>
                                <th>email</th>
                                <th>Nombre</th>
                                <th className="derecha">Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((datos) =>
                                <tr>
                                    <td>{datos.cedula}</td>
                                    <td>{datos.direccion}</td>
                                    <td>{datos.correo}</td>
                                    <td>{datos.nombre}</td>
                                    <td>{datos.telefono}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Sidebar>
    )
}

export default ReportesClientes
