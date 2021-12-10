import axios from 'axios'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import Sidebar from '../sidebar/Sidebar'


const Ventas = () => {

    //json
    const [productos,setProductos]=React.useState([{}])
    const [clientes,setClientes]=React.useState([{}])

    //cliente
    const [cedulaCliente,setCedulaCliente] = React.useState()
    const [nombreCliente,setNombreCliente] = React.useState()
    const [telefonoCliente,setTelefonoCliente]=React.useState()

    //producto
    const [codigoProducto1,setCodigoProducto1] = React.useState()
    const [codigoProducto2,setCodigoProducto2] = React.useState()
    const [codigoProducto3,setCodigoProducto3] = React.useState()

    const [producto1,setProducto1] = React.useState([{}])
    const [producto2,setProducto2] = React.useState([{}])
    const [producto3,setProducto3] = React.useState([{}])

    const [nombreProducto1,setNombreProducto1] = React.useState()
    const [nombreProducto2,setNombreProducto2] = React.useState()
    const [nombreProducto3,setNombreProducto3] = React.useState()

    const [precioProducto1,setPrecioProducto1] = React.useState()
    const [precioProducto2,setPrecioProducto2] = React.useState()
    const [precioProducto3,setPrecioProducto3] = React.useState()

    const [cantidadProducto1,setCantidadProducto1] = React.useState()
    const [cantidadProducto2,setCantidadProducto2] = React.useState()
    const [cantidadProducto3,setCantidadProducto3] = React.useState()


    const [ivaProductos,setIvaProductos] = React.useState()
    const [totalVenta,setTotalVenta]=React.useState()
    const [totalConIva,setTotalConIva] = React.useState()


    



    useEffect( () => {
        axios.get(`http://localhost:8081/ListarProductos`).then((res)=>{
            if(res.status === 200){
                const datos = res.data
                setProductos(datos)
                console.log(productos)
            }  
        })

        axios.get(`http://localhost:8082/Clientes`).then((res)=>{
            if(res.status===200){
                const datos = res.data
                setClientes(datos)
                console.log(clientes)
            }
        })

    }, [])


    useEffect(()=>{
        ivaCompra()
    })

    const ivaCompra = () =>{
        setIvaProductos(Number(producto1.ivacompra)+Number(producto2.ivacompra)+Number(producto3.ivacompra))
        setTotalVenta(Number(producto1.precio_venta)+Number(producto2.precio_venta)+Number(producto3.precio_venta))
        setTotalConIva(Number(ivaProductos+totalVenta))
    }


    //cliente
    const consultarCedula = (e) =>{
        e.preventDefault()
        let clienteEncontrado = clientes.find(cliente=>cliente.cedula=== cedulaCliente);
        
        if(clienteEncontrado!=null){
            setNombreCliente(clienteEncontrado.nombre)
            setTelefonoCliente(clienteEncontrado.telefono)
        }
        
    }
    const onChangeCedula = (e) =>{
		setCedulaCliente(e.target.value)
    }


    //productos

    const onChageCodigoProducto1 = (e) =>{
        setCodigoProducto1(e.target.value)
    }   

    const consultarProducto1 = (e) =>{
        e.preventDefault()
        let productoEncontrado = productos.find( producto => producto.codigo_producto === Number(codigoProducto1));
        if(productoEncontrado != null){
            setProducto1(productoEncontrado)
            setNombreProducto1(productoEncontrado.nombre_producto)
            setPrecioProducto1(productoEncontrado.precio_venta)
            setCantidadProducto1(1)
        }
        
    }

    const onChageCantidadProducto1 = (e) =>{
        if(e.target.value>=1){
            setCantidadProducto1(e.target.value)
            setPrecioProducto1(e.target.value * producto1.precio_venta)
        }else{
            setCantidadProducto1(1)
        }
    }

    const onChageCodigoProducto2 = (e) =>{
        setCodigoProducto2(e.target.value)
    }   

    const consultarProducto2 = (e) =>{
        e.preventDefault()
        let productoEncontrado = productos.find( producto => producto.codigo_producto === Number(codigoProducto2));
        if(productoEncontrado != null){
            setProducto2(productoEncontrado)
            setNombreProducto2(productoEncontrado.nombre_producto)
            setPrecioProducto2(productoEncontrado.precio_venta)
            setCantidadProducto2(1)
        }
    }

    const onChageCantidadProducto2 = (e) =>{
        if(e.target.value>=1){
            setCantidadProducto2(e.target.value)
            setPrecioProducto2(e.target.value * producto2.precio_venta)
        }else{
            setCantidadProducto2(1)
        }
    }

    const onChageCodigoProducto3 = (e) =>{
        setCodigoProducto3(e.target.value)
    }   

    const consultarProducto3 = (e) =>{
        e.preventDefault()
        let productoEncontrado = productos.find( producto => producto.codigo_producto === Number(codigoProducto3));
        if(productoEncontrado != null){
            setProducto3(productoEncontrado)
            setNombreProducto3(productoEncontrado.nombre_producto)
            setPrecioProducto3(productoEncontrado.precio_venta)
            setCantidadProducto3(1)
        }
        
    }

    const onChageCantidadProducto3 = (e) =>{
        if(e.target.value>=1){
            setCantidadProducto3(e.target.value)
            setPrecioProducto3(e.target.value * producto3.precio_venta)
        }else{
            setCantidadProducto3(1)
        }
    }

    //enviar venta

    const enviarVenta = async (e)=>{
        e.preventDefault()

        const venta={
            cedulaCliente: cedulaCliente,
            codigoVenta: 1,
            detalleVenta: {
                cantidadProductos: cantidadProducto1,
                codigoProducto: codigoProducto1,
                valorTotal: precioProducto1,
                valorIva: cantidadProducto1*producto1.ivacompra
            },
            ivaVenta: ivaProductos,
            totalVenta: totalVenta,
            valorVenta: totalConIva
        }

        const res = await axios.post("http://localhost:8084/agregarventa",venta)
        if(res.status === 200){
            Swal.fire({
                title: "¡En hora buena!",
                text: "Se agrego la venta",
                icon: "success"
            })
        }
    }


    return (
        <Sidebar>
            <div className="venta-container">
                <div className="informacion-cliente-container">
                    <form  action="" onSubmit={consultarCedula} method="post">
                        <label for="cedulaCliente">Cedula*</label>
                        <input className="input-form" type="text" name="cedula" id="cedulaCliente"   autoComplete="off" onChange={onChangeCedula}/>
                        <input className="button-form btn" type="submit" value="Consultar"/>
                        <label for="nombreCliente">Nombre</label>
                        <input className="input-form" type="text" name="nombreCliente" id="nombreCliente" readOnly value={nombreCliente}/>
                        <label for="telefonoCliente">Telefono</label>
                        <input className="input-form" type="text" name="telefonoCliente" id="telefonoCliente" readOnly value={telefonoCliente}/>
                    </form>
                </div>
                <div className="crud-productos-container">
                    <div className="tittles-container">
                        <div className="tittle t-1"><p>Cod.Producto*</p></div>
                        <div className="tittle t-2">Nombre Producto</div>
                        <div className="tittle t-3">Cant</div>
                        <div className="tittle t-4">Vlr. Total</div>
                    </div>
                    <div className="productos-container">
                        <div className="crud-productos">
                            <form action="" onSubmit={consultarProducto1} method="post">
                                <input className="input-form" id="codigo-1" type="text" name="codigoProducto" autoComplete="off" onChange={onChageCodigoProducto1}/>
                                <input className="button-form btn" id="sumit-1" type="submit" value="Consultar"/>
                                <input className="input-form" id="nombreProducto-1" type="text" readOnly value={nombreProducto1} autoComplete="off"/>
                                <input className="input-form cantidadProducto" id="cantidad-1" type="text"  value={cantidadProducto1} autoComplete="off" onChange={onChageCantidadProducto1}/>
                                <input className="input-form valorProducto" id="valor-1" type="text" readOnly autoComplete="off" value={precioProducto1}/>
                            </form>
                        </div>
                        <div className="crud-productos">
                            <form action="" method="post" onSubmit={consultarProducto2}>
                                <input className="input-form" id="codigo-2" type="text" name="codigoProducto" autoComplete="off" onChange={onChageCodigoProducto2}/>
                                <input className="button-form btn" id="sumit-2" type="submit" value="Consultar"/>
                                <input className="input-form" id="nombreProducto-2" type="text" readOnly value={nombreProducto2} autoComplete="off"/>
                                <input className="input-form cantidadProducto" id="cantidad-2" type="text" value={cantidadProducto2} autoComplete="off" onChange={onChageCantidadProducto2}/>
                                <input className="input-form valorProducto" id="valor-2" type="text" readOnly autoComplete="off" value={precioProducto2}/>
                            </form>
                        </div>
                        <div className="crud-productos">
                            <form action="" method="post" onSubmit={consultarProducto3}>
                                <input className="input-form" id="codigo-3" type="text" name="codigoProducto" autoComplete="off" onChange={onChageCodigoProducto3}/>
                                <input className="button-form btn" id="sumit-3" type="submit" value="Consultar"/>
                                <input className="input-form" id="nombreProducto-3" type="text" readOnly value={nombreProducto3} autoComplete="off"/>
                                <input className="input-form cantidadProducto" id="cantidad-3" type="text" value={cantidadProducto3} autoComplete="off" onChange={onChageCantidadProducto3}/>
                                <input className="input-form valorProducto" id="valor-3" type="text" readOnly autoComplete="off" value={precioProducto3}/>
                            </form>
                        </div>
                        <div className="totales-container">
                            <div className="formulario-envio">
                                <form id="form-envio" action="" onSubmit={enviarVenta} method="post">
                                    <div className="envio">
                                        <input className="button-form btn" id="enviarVenta" type="submit" value="Confirmar"/>
                                        <input type="text" name="cedula_cliente" value="" id="cedulaCliente-envio" hidden/>
                                        <input type="text" name="cedula_usuario" id="cedulaUsuario-envio" hidden/>
                                    </div>
                                    <div className="labels-envio">
                                        <label for="">Total Iva</label>
                                        <label for="">Total Venta</label>
                                        <label for="">Total con Iva</label>
                                    </div>
                                    <div className="totales">
                                        <input className="input-form" type="text" name="ivaventa" id="ivaVenta" readOnly value={ivaProductos}/>
                                        <input className="input-form" type="text" name="total_venta" id="totalVenta" readOnly value={totalVenta}/>							
                                        <input className="input-form" type="text" name="valor_venta" id="valorVenta" readOnly value={totalConIva}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="error-container">
                    <p>hola</p>
                </div>
            </div>
        </Sidebar>
    )
}

export default Ventas
