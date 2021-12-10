import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from '../sidebar/Sidebar'

const ConsultarProveedor = () => {
    const [nit,setNit] = React.useState("")
    const [nitTemporal,setNitTemporal] = React.useState("")
    const [nombre,setNombre]=React.useState("")
    const [telefono,setTelefono] = React.useState("")
    const [direccion,setDireccion] = React.useState("")
    const [ciudad,setCiudad] = React.useState("")

    const onChageNit= (e)=>{
        setNit(e.target.value);
    }
    const consultarProveedor = async (e) =>{ 
        try{
        e.preventDefault();
        const res = await axios.get(`http://localhost:8083/ConsultarProveedor?nit=${nit}`)
        console.log(nit)
        if(res.status!==200){
            Swal.fire({
                tittle: "¡Algo ha salido mal!",
                text: "El proveedor no existe",
                icon: "error",
            })
        }else{
            setNitTemporal(res.data.nit);
            setTelefono(res.data.telefono);        
            setNombre(res.data.nombre)
            setDireccion(res.data.direccion);
            setCiudad(res.data.ciudad);
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
                            <label className="label-form" for="nit"><i className="fas far fa-id-card"></i>Nit Proveedor</label>
                            <input className="input-form" id="nit" type="text" name="nit" autoComplete="off"  onChange={onChageNit} required></input>                          
                            <div className="button-container">
                                <button className="btn" onClick={consultarProveedor}>Consultar</button>
                                <Link to="/Proveedores" className="btn">Volver</Link>                                                                                                                                    
                            </div>
                        </form>
                        <div id="main-container" className="main-container-consultar-cliente">
                            <table >
                                <thead id="cabecera">
                                    <tr>
                                        <th className="izquierda">nit</th>
                                        <th>Direccion</th>
                                        <th>Ciudad</th>
                                        <th>Nombre</th>
                                        <th className="derecha">Telefono</th>	
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{nitTemporal}</td>
                                    <td>{direccion}</td>
                                    <td>{ciudad}</td>
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

export default ConsultarProveedor
