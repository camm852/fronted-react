import axios from 'axios'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import Sidebar from '../sidebar/Sidebar'

const Products = () => {
    
    const [archivo,setArchivo] = React.useState(null)
    const [productos,setProductos]=React.useState([{}])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        const res = await axios.get(`http://localhost:8081/ListarProductos`)

        if(res.status === 200){
            const datos = res.data
            setProductos(datos)
        }

    },[])


    const onSumit= async (e) =>{
        // e.preventDefault()
        try{
            const f = new FormData();

            f.append("file",archivo);

            const res = await axios.post('http://localhost:8081/AgregarProducto',f, )

            if(res.status!==201){
                Swal.fire({
                    title: "¡Error!",
                    text: "Los productos no fueron agregados",
                    icon: "error",
                })
            }else{
                Swal.fire({
                    title: "¡En hora buena!",
                    text: "Los productos fueron agregados",
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonColor: "#1976d2",
                    confirmButtonText: "Ok"
                }).then((result)=>{
                    if(result.isConfirmed){
                        window.location.reload();
                    }
                })


            }

        }catch{
            Swal.fire({
                title: "¡Algo ha salido mal!",
                text: "Los productos no fueron agregados",
                icon: "error",
            })
        }
    }
    
    const onChageCSV = (e) =>{
        setArchivo(e.target.files[0]);
        console.log(archivo)
    }




    return (
        <Sidebar>
                <div className="producto-container">
                    <div className="form-productos">
                        {/* <form method="post" encType="multipart/form-data"  onSubmit={onSumit}> */}
                            <input type="file" name="file" accept=".csv"  onChange={onChageCSV} /> 
                            <button onClick={onSumit} >Cargar archivo</button>
                        {/* </form> */}
                    </div>
                    <div className="tittle-producto-container">
                        <h2 className="tittle">Listado de Productos</h2>
                    </div>
                    <div id="main-container">
                        <table name="tablaListado">
                            <thead id="cabecera">
                                <tr>
                                    <th className="izquierda">Codigo</th>
                                    <th>Iva</th>
                                    <th>NitProveedor</th>
                                    <th>Nombre</th>
                                    <th>Precio-Compra</th>
                                    <th className="derecha">Precio-Venta</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((datos) =>
                                    <tr>
                                        <td>{datos.codigo_producto}</td>
                                        <td>{datos.ivacompra}</td>
                                        <td>{datos.nitproveedor}</td>
                                        <td>{datos.nombre_producto}</td>
                                        <td>{datos.precio_compra}</td>
                                        <td>{datos.precio_venta}</td>

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

export default Products
