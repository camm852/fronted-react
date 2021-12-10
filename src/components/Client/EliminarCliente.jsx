import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const EliminarCliente = () => {

    const [cedula,setCedula] = React.useState("")

    const onChageCedula= (e)=>{
        setCedula(e.target.value);
    }
    const consultarCliente = async (e) =>{ 
        try{
        e.preventDefault();
        const res = await axios.delete(`http://localhost:8082/EliminarCliente?cedula=${cedula}`)
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
                text: "El cliente fue eliminado",
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
                            <label className="label-form" for="cedula"><i className="fas far fa-id-card"></i>Cédula</label>
                            <input className="input-form" id="cedula" type="text" name="cedula" autoComplete="off" onChange={onChageCedula} required></input>
                            
                            <label className="label-form" for="telefono"><i className="fas fa-mobile"></i>Teléfono</label>
                            <input className="input-form" id="telefono"type="text" name="telefono" autoComplete="off"></input>

                            <label className="label-form" for="nombre"><i className="fas fa-user-tag"></i>Nombre Completo</label>
                            <input className="input-form" id="nombre" type="text" name="nombre" autoComplete="off" ></input>

                            <label className="label-form" for="direccion"><i className="fas fa-route"></i>Dirección</label>
                            <input className="input-form" id="direccion" type="text" name="direccion" autoComplete="off"></input>

                            <label className="label-form" for="correo"><i className="fas fa-at"></i>Correo Electrónico</label>
                            <input className="input-form" id="correo" type="email" name="email" autoComplete="off" ></input>
                            <div className="button-container">
                                <button className="btn" onClick={consultarCliente}>Eliminar</button>
                                <Link to="/Clientes" className="btn">Volver</Link>                                                                                     
                            </div>
                        </form>
                    </div>
                </div> 
            
        </Sidebar>
    )
}

export default EliminarCliente
