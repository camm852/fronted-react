import React from 'react'
import { Link } from "react-router-dom";


const Sidebar = (props) => {
    return (
            <div className={props.class}>
                <div className="sidebar">
                    <div className="logo_content">
                        <div className="logo">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="logo_name">Tienda Generica</div>
                        </div>
                    </div>
                    <ul className="nav_list">
                        <li className="li-container">
                            <Link to="/Productos" className="a-container" id="productos-a">
                                <i className="fas fa-shopping-bag"></i>
                                <span className="links_name">Productos</span>
                            </Link>
                        </li>
                        <li className="li-container">
                            <Link to="/Clientes" className="a-container" id="clients-a">
                                <i className="fas fa-user-tie"></i>
                                <span className="links_name">Clientes</span>
                            </Link>
                        </li>
                        <li className="li-container">
                            <Link to="/Proveedores" className="a-container" id="proveedores-a">
                                <i className="fas fa-truck"></i>
                                <span className="links_name">Proveedores</span>
                            </Link>
                        </li>
                        <li className="li-container">
                            <Link to="/Ventas" className="a-container" id="ventas-a">
                                <i className="fas fa-coins"></i>
                                <span className="links_name">Ventas</span>
                            </Link>
                        </li>
                        <li className="li-container">
                            <Link to="/Reportes" className="a-container" id="reportes-a">
                                <i className="fas fa-address-book"></i>
                                <span className="links_name">Reportes</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="logout">
                        <a  href="/"><i id="log-out" className="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
                {props.children}
            </div>
    )
}

export default Sidebar
