import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const ConsultarCliente = () => {
    const [cedula,setCedula] = React.useState("")
    const [cedulaTemporal,setCedulaTemporal] = React.useState("")
    const [nombre,setNombre]=React.useState("")
    const [telefono,setTelefono] = React.useState("")
    const [direccion,setDireccion] = React.useState("")
    const [correo,setCorreo] = React.useState("")

    const onChageCedula= (e)=>{
        setCedula(e.target.value);
    }
    const consultarCliente = async (e) =>{ 
        try{
        e.preventDefault();
        const res = await axios.get(`http://localhost:8082/ConsultarCliente?cedula=${cedula}`)
        console.log(cedula)
        if(res.status!==200){
            Swal.fire({
                tittle: "¡Algo ha salido mal!",
                text: "El cliente no existe",
                icon: "error",
            })
        }else{
            setCedulaTemporal(res.data.cedula);
            setTelefono(res.data.telefono);        
            setNombre(res.data.nombre)
            setDireccion(res.data.direccion);
            setCorreo(res.data.correo);
            console.log(nombre)
        }
        }catch{
            Swal.fire({
                tittle: "¡Algo ha salido mal!",
                text: "Ha ocurrido algo con el servidor",
                icon: "error",
            })
        }   
    }

    return (
        <Sidebar>
                <div className="crud crud-consultar">
                    <div className="form-container clients-form-container">
                        <form className="form-agregar" method="get">
                            <label className="label-form" for="cedula"><i className="fas far fa-id-card"></i>Cédula Cliente</label>
                            <input className="input-form" id="cedula" type="text" name="cedula" autoComplete="off"  placeholder="cedula del cliente" onChange={onChageCedula} required></input>                          
                            <div className="button-container">
                                <button className="btn" onClick={consultarCliente}>Consultar</button>
                                <Link to="/Clientes" className="btn">Volver</Link>                                                                                                                                    
                            </div>
                        </form>
                        <div id="main-container" className="main-container-consultar-cliente">
                            <table >
                                <thead id="cabecera">
                                    <tr>
                                        <th className="izquierda">Cedula</th>
                                        <th>Direccion</th>
                                        <th>Email</th>
                                        <th>Nombre</th>
                                        <th className="derecha">Telefono</th>	
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{cedulaTemporal}</td>
                                    <td>{direccion}</td>
                                    <td>{correo}</td>
                                    <td>{nombre}</td>
                                    <td>{telefono}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div> 
        </Sidebar>
    )
}

export default ConsultarCliente
