import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const ReportesVentas = () => {
    return (
        <Sidebar>
            <form name="consultaClienteForm" action="/listarVentas" method="post">
            </form>
            <div class="producto-container">
                <div class="tittle-producto-container tittle-venta">
                    <h2 class="tittle">Total de ventas por cliente</h2>
                </div>
                <div id="main-container">
                    <table name="tablaproducto">
                        <thead id="cabecera">
                            <tr>
                                <th class="izquierda">Cedula</th>
                                <th>Nombre</th>
                                <th class="derecha">Total</th>
                                
                            </tr>
                        </thead>
                        {/* <tbody>
                        <c:set var="total" value="${0}" />	
                        
                    
                        <c:forEach items="${ventas}" var="cli">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <c:set var="total" value="${total+cli.ventas_totales}" />	
                            </tr>
                        </c:forEach>
                        </tbody> */}
                    </table>
                    
                    <div class="total-container">
                        <label for="">Total Ventas $</label>
                        <input class="input-form" type="text"  readonly/>
                    </div>
                    
                </div>
            </div>
        </Sidebar>
    )
}

export default ReportesVentas
