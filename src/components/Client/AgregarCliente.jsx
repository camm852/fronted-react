import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const AgregarCliente = () => {
    const [cedula,setCedula] = React.useState("")
    const [nombre,setNombre]=React.useState("")
    const [telefono,setTelefono] = React.useState("")
    const [direccion,setDireccion] = React.useState("")
    const [correo,setCorreo] = React.useState("")

    const onChageCedula= (e)=>{
        setCedula(e.target.value);
        console.log(e.target.value)
    }
    const onChageTelefono=(e)=>{
        setTelefono(e.target.value);
        console.log(e.target.value)
        
    }
    const onChageNombre=(e)=>{
        setNombre(e.target.value)
        console.log(e.target.value)
    }   
    const onChageDireccion= (e)=>{
        setDireccion(e.target.value);
        console.log(e.target.value)
    }
    const onChageCorreo=(e)=>{
        setCorreo(e.target.value);
        console.log(e.target.value)
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
            
            const res = await axios.post('http://localhost:8082/AgregarCliente', {
                cedula: cedula,
                nombre: nombre,
                telefono: telefono,
                direccion: direccion,
                correo: correo
            });
        
            console.log(res);
            if(res.status === 201){
                Swal.fire({
                    tittle: "¡Buen trabajo!",
                    text: "El cliente ha sido agregado",
                    icon: "success",
                })
            }else{
                Swal.fire({
                    tittle: "¡Algo ha salido mal!",
                    text: "El cliente no fue agregado",
                    icon: "error",
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
                    <div className="form-container">
                        <form className="form-agregar" onSubmit={onSubmit} method="post">
                            <label className="label-form" for="cedula"><i className="fas far fa-id-card"></i>Cédula</label>
                            <input className="input-form" id="cedula" type="text" name="cedula" autoComplete="off" onChange={onChageCedula} required></input>
                            
                            <label className="label-form" for="telefono"><i className="fas fa-mobile"></i>Teléfono</label>
                            <input className="input-form" id="telefono"type="text" name="telefono" autoComplete="off" onChange={onChageTelefono} required></input>

                            <label className="label-form" for="nombre"><i className="fas fa-user-tag"></i>Nombre Completo</label>
                            <input className="input-form" id="nombre" type="text" name="nombre" autoComplete="off" onChange={onChageNombre} required ></input>

                            <label className="label-form" for="direccion"><i className="fas fa-route"></i>Dirección</label>
                            <input className="input-form" id="direccion" type="text" name="direccion" autoComplete="off" onChange={onChageDireccion}></input>

                            <label className="label-form" for="correo"><i className="fas fa-at"></i>Correo Electrónico</label>
                            <input className="input-form" id="correo" type="email" name="email" autoComplete="off" onChange={onChageCorreo} ></input>
                            <div className="button-container">
                                <button className="btn" type="submit">Agregar</button>
                                <Link to="/Clientes" className="btn">Volver</Link>                                                                                                         
                            </div>
                        </form>
                    </div>
                </div>
        </Sidebar>
    )
}

export default AgregarCliente
