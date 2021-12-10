import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import Sidebar from '../sidebar/Sidebar'



const EliminarProveedor = () => {
    const [nit,setNit] = React.useState("")

    const onChagenit= (e)=>{
        setNit(e.target.value);
    }
    const consultarCliente = async (e) =>{ 
        try{
        e.preventDefault();
        const res = await axios.delete(`http://localhost:8083/EliminarProveedor?nit=${nit}`)
        console.log(res.status)
        if(res.status!==200){
            Swal.fire({
                tittle: "¡Algo ha salido mal!",
                text: "El cliente no existe",
                icon: "error",
            })
        }else{
            Swal.fire({
                tittle: "¡Buen trabajo!",
                text: "El proveedor fue eliminado",
                icon: "success",
            })
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
            
                <div className="crud">
                    <div className="form-container clients-form-container">
                    <form className="form-agregar" method="post">
                            <label className="label-form" for="nit"><i className="fas far fa-id-card"></i>Nit</label>
                            <input className="input-form" id="nit" type="text" name="nit" autoComplete="off" onChange={onChagenit} required></input>
                            
                            <label className="label-form" for="telefono"><i className="fas fa-mobile"></i>Teléfono</label>
                            <input className="input-form" id="telefono"type="text" name="telefono" autoComplete="off"></input>

                            <label className="label-form" for="nombre"><i className="fas fa-user-tag"></i>Nombre</label>
                            <input className="input-form" id="nombre" type="text" name="nombre" autoComplete="off" ></input>

                            <label className="label-form" for="direccion"><i className="fas fa-route"></i>Dirección</label>
                            <input className="input-form" id="direccion" type="text" name="direccion" autoComplete="off"></input>

                            <label className="label-form" for="correo"><i className="fas fa-at"></i>Ciudad</label>
                            <input className="input-form" id="correo" type="text" name="ciudad" autoComplete="off" ></input>
                            <div className="button-container">
                                <button className="btn" onClick={consultarCliente}>Eliminar</button>
                                <Link to="/Proveedores" className="btn">Volver</Link>                                                                                     
                            </div>
                        </form>
                    </div>
                </div> 
            
        </Sidebar>
    )
}

export default EliminarProveedor
