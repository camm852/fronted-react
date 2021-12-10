import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sidebar from '../sidebar/Sidebar'

const AgregarProveedor = () => {

    const [nit,setNit] = React.useState("")
    const [nombre,setNombre]=React.useState("")
    const [telefono,setTelefono] = React.useState("")
    const [direccion,setDireccion] = React.useState("")
    const [ciudad,setCiudad] = React.useState("")

    const onChageNit= (e)=>{
        setNit(e.target.value);
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
    const onChageCiudad=(e)=>{
        setCiudad(e.target.value);
        console.log(e.target.value)
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
            
            const res = await axios.post('http://localhost:8083/AgregarProveedor', {
                nit: nit,
                nombre: nombre,
                telefono: telefono,
                direccion: direccion,
                ciudad: ciudad
            });
        
            console.log(res);
            if(res.status === 201){
                Swal.fire({
                    title: "¡Buen trabajo!",
                    text: "El proveedor ha sido agregado",
                    icon: "success",
                })
            }else{
                Swal.fire({
                    title: "¡Algo ha salido mal!",
                    text: "El proveedor no fue agregado",
                    icon: "error",
                })
            }
        }catch{
            Swal.fire({
                title: "¡Algo ha salido mal!",
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
                            <label className="label-form" for="nit"><i className="fas far fa-id-card"></i>Nit</label>
                            <input className="input-form" id="nit" type="text" name="nit" autoComplete="off" onChange={onChageNit} required></input>
                            
                            <label className="label-form" for="telefono"><i className="fas fa-mobile"></i>Teléfono</label>
                            <input className="input-form" id="telefono"type="text" name="telefono" autoComplete="off" onChange={onChageTelefono} required></input>

                            <label className="label-form" for="nombre"><i className="fas fa-user-tag"></i>Nombre</label>
                            <input className="input-form" id="nombre" type="text" name="nombre" autoComplete="off" onChange={onChageNombre} required ></input>

                            <label className="label-form" for="direccion"><i className="fas fa-route"></i>Dirección</label>
                            <input className="input-form" id="direccion" type="text" name="direccion" autoComplete="off" onChange={onChageDireccion}></input>

                            <label className="label-form" for="ciudad"><i className="fas fa-at"></i>Ciudad</label>
                            <input className="input-form" id="ciudad" type="text" name="ciudad" autoComplete="off" onChange={onChageCiudad} ></input>
                            <div className="button-container">
                                <button className="btn" type="submit">Agregar</button>
                                <Link to="/Proveedores" className="btn">Volver</Link>                                                                                                         
                            </div>
                        </form>
                    </div>
                </div>
        </Sidebar>
    )
}

export default AgregarProveedor
