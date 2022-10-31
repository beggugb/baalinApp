import React from "react";
import { Table, Input  } from "reactstrap";


const TableCliente = ({data,setIndicador,indicador}) =>{
    return(   
        <div className="tableContenedor">
        <Table className="table-simple">            
            <thead>
                <tr>                    
                    <th width='5%'></th>                    
                    <th width='50%'>Nombres</th>
                    <th width='20%'>Nit</th>
                    <th width='20%'>Teléfono</th>
                    <th width='10%'>Tipo</th>                    
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index}>
                    <td>
                        <Input type="checkbox" 
                          onChange={() => { setIndicador(item.id,item) }} 
                          checked={ item.id === indicador ? true : false}
                          />
                    </td>                    
                    <td>{item.nombres}</td>                    
                    <td>{item.nit}</td>
                    <td>{item.telefono}</td>
                    <td>{item.tipo}</td>                                    
                </tr>
                ))}
            </tbody>
            : 
            <tbody>                
                <tr>                    
                   <td colSpan={5}>Sin resultados</td>                                        
                </tr>                
            </tbody>
            }           
        </Table> 
        </div>       
    )
}

export default TableCliente;