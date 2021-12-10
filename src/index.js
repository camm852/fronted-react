import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Products from './components/products/Products';
import Cliente from './components/Client/Cliente';
import Ventas from './components/ventas/Ventas';
import Reportes from './components/reports/Reportes';
import ReportesClientes from './components/reports/ReportesClientes';
import ReportesVentas from './components/reports/ReportesVentas';
import AgregarCliente from './components/Client/AgregarCliente';
import ActualizarCliente from './components/Client/ActualizarCliente';
import ConsultarCliente from './components/Client/ConsultarCliente';
import EliminarCliente from './components/Client/EliminarCliente';
import Proveedor from './components/Proveedores/Proveedor';
import AgregarProveedor from './components/Proveedores/AgregarProveedor';
import ActualizarProveedor from './components/Proveedores/ActualizarProveedor';
import ConsultarProveedor from './components/Proveedores/ConsultarProveedor';
import EliminarProveedor from './components/Proveedores/EliminarProveedor';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="Sidebar" element={<Sidebar/>}/>
        <Route path="Productos" element={<Products/>}/>
        <Route path="Clientes" element={<Cliente/>}/>
        <Route path="/Clientes/AgregarCliente" element={<AgregarCliente/>}/>
        <Route path="/Clientes/ActualizarCliente" element={<ActualizarCliente/>}/>
        <Route path="/Clientes/ConsultarCliente" element={<ConsultarCliente/>}/>
        <Route path="/Clientes/EliminarCliente" element={<EliminarCliente/>}/>
        <Route path="Proveedores" element={<Proveedor/>}/>
        <Route path="/Proveedores/AgregarProveedor" element={<AgregarProveedor/>}/>
        <Route path="/Proveedores/ActualizarProveedor" element={<ActualizarProveedor/>}/>
        <Route path="/Proveedores/ConsultarProveedor" element={<ConsultarProveedor/>}/>
        <Route path="/Proveedores/EliminarProveedor" element={<EliminarProveedor/>}/>
        <Route path="Ventas" element={<Ventas/>}/>
        <Route path="Reportes" element={<Reportes/>}/>
        <Route path="/Reportes/ListaClientes" element={<ReportesClientes/>}/>
        <Route path="/Reportes/ListaVentas" element={<ReportesVentas/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
