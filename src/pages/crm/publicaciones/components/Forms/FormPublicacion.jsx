import React from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import SelectSimpleForm from "../../../../../components/Select/SelectSimpleForm";
import SelectLocalForm from "../../../../../components/Select/SelectLocalForm"
import { useSelector } from 'react-redux'
import { tipo, contrato, moneda, pago, inmobiliaria } from '../../../../../data/dataLoad'

const FormCliente = ({item,handleChange,submitHandle}) =>{    
    const { items } = useSelector(state => state.categoria)

    return(            
     <Form onSubmit={ submitHandle}>                                        
      <Row>
        <Col md="8">
        <FormGroup>
            <Label for="label">Label </Label>
            <Input
            id="label"
            name="label"
            type="text"                 
            value={item.label}
            onChange={(e)=>{ handleChange(e)}} 
            required              
            />
        </FormGroup>
        </Col>
        <Col md="4">  
            <SelectSimpleForm
                label={'Categoría'}                        
                items={items}      
                xredux={'categoriasLista'}                  
                xreduxItem={'publicacionChange'} 
                payload={'categorias'}                       
                keyId={'categoriaId'}
                itemId={item.categoriaId}                        
            /> 
        </Col>
     </Row>   
     <Row>
        <Col md="8">
        <FormGroup>
            <Label for="direccion">Dirección </Label>
            <Input
            id="direccion"
            name="direccion"
            type="text"                 
            value={item.direccion}
            onChange={(e)=>{ handleChange(e)}} 
            required              
            />
        </FormGroup>
        </Col>
        <Col md="4">
                <FormGroup>                    
                    <SelectLocalForm
                        label={'Tipo'}                        
                        items={tipo}                        
                        xreduxItem={'publicacionChange'}                        
                        keyId={'tipo'}
                        itemId={item.tipo} 
                    />        
                </FormGroup>
            </Col>
        </Row>    

        <FormGroup>
            <Label for="condiciones">Condiciones </Label>
            <Input
            id="condiciones"
            name="condiciones"
            type="text"     
            maxLength={200}            
            value={item.condiciones}
            onChange={(e)=>{ handleChange(e)}} 
            required              
            />
        </FormGroup>
        <Row>
            <Col md="6">
                <FormGroup>                    
                    <SelectLocalForm
                        label={'Contrato'}                        
                        items={contrato}                        
                        xreduxItem={'publicacionChange'}                        
                        keyId={'contrato'}
                        itemId={item.contrato} 
                    />        
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>                    
                    <SelectLocalForm
                        label={'Trato'}                        
                        items={inmobiliaria}                        
                        xreduxItem={'publicacionChange'}                        
                        keyId={'inmobiliaria'}
                        itemId={item.inmobiliaria} 
                    />        
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="6">
                <FormGroup>
                    <Label for="ivigencia">I.Vigencia </Label>                     
                    <Input
                        id="ivigencia"
                        name="ivigencia"
                        type="date"                 
                        value={item.ivigencia}
                        onChange={(e)=>{ handleChange(e)}}                                     
                    />                           
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label for="fvigencia">F.Vigencia </Label>           
                    <Input
                        id="fvigencia"
                        name="fvigencia"
                        type="date"                 
                        value={item.fvigencia}
                        onChange={(e)=>{ handleChange(e)}}                                     
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="6">
                <FormGroup>                                        
                        <Label for="precio">Precio </Label>
                        <Input
                        id="precio"
                        name="precio"
                        type="number"                 
                        value={item.precio}
                        onChange={(e)=>{ handleChange(e)}} 
                        required              
                        />                         
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>                    
                    <SelectLocalForm
                        label={'Moneda'}                        
                        items={moneda}                        
                        xreduxItem={'publicacionChange'}                        
                        keyId={'moneda'}
                        itemId={item.moneda} 
                    />        
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md="12">                
                <FormGroup row>
                    <Label for="caractersticas">Caracteristicas </Label>
                    <Input
                    id="caracteristicas"
                    name="caracteristicas"
                    type="textarea"                 
                    value={item.caracteristicas}
                    onChange={(e)=>{ handleChange(e)}}                    
                    required              
                    />                    
                </FormGroup>
            </Col>
            
        </Row>
     
        <ButtonGroup>
            <Button 
            type="submit"
            className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
            <FontAwesomeIcon icon={faSave} />  
            {' '} {item.id ? " Actualizar" : " Guardar"}
            </Button>  
        </ButtonGroup>        
     </Form>             
)    
}

export default FormCliente