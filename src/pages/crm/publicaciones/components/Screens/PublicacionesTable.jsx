import React,{ useEffect} from "react";
import { Modal, ModalBody, Row,Col,Button, ButtonGroup, Form } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import { crudActions } from '../../../../../actions/crud.actions'
import TablePublicacion from '../Tables/TablePublicacion'
import Pagination from '../../../../../components/Navigations/Pagination'
import FormPublicacion from '../Forms/FormPublicacion'
import {api} from '../../../../../helpers/api'
import Mapa from '../Forms/PublicacionMapa'
import ClienteImagen from '../../../../../components/Imagen/FormImagen'

import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faSave, faCopy, faTrash, faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";

const PublicacionesTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const { data, item, total, pagina, paginas ,modalView,modalViews, indicador } = useSelector(state => state.publicacion)  
    const nindicador  = useSelector(state => state.cliente.indicador)
    const citem  = useSelector(state => state.cliente.item)
    
    
    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('publicacionesData','publicaciones',page,num,nindicador,nindicador))
    }
    
    const setIndicador = (pky) => {            
        let iok = pky === indicador  ? 0 : pky
        dispatch({type:'publicacionIndicador',response:iok})         
      };

  

    const toggleModalView = (view) => {   
        console.log(view) 
        let est = !modalView                            
        if(view){
            dispatch({type:'publicacionAdd',response:view})                    
        }
        dispatch({type:'publicacionView',response:est})
        
    };  

    


   

    const handleDelete = (pky) =>{        
        dispatch(crudActions.dDelete('publicacionesData','publicaciones',pky))        
    }

   
    
    const handleEdit = (it) =>{
        console.log(it)
        if(it !==0){
            /*function getItem(xredux,payload,pky){*/
            dispatch(crudActions.getItem('publicacionAdd','publicaciones',it))            
        }        
    }

    const toggleModalViews = (view) => {           
        let est = !modalViews                            
        if(view){
            /*dispatch({type:'publicacionAdd',response:view})                    */
            dispatch(crudActions.getItem('publicacionAdd','publicaciones',view))
        }
        dispatch({type:'publicacionViews',response:est})
        
    };  

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'publicacionChange',name:name,value:value}) 
    }

   
   
    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(crudActions.putUpdate('publicacionesData','publicaciones',item,'unit'))
        }else{       
            let diok = item
            diok.clienteId = nindicador     
            dispatch(crudActions.postAdd('publicacionesData','publicaciones',diok,'unit'))
        }
        dispatch({type:'publicacionReset'}) 
    }
    const submitHandles = () =>{        
        dispatch(crudActions.putUpdate('publicacionesData','publicaciones',item,'unit'))        
        dispatch({type:'publicacionReset'}) 
    }

    
    
   
    useEffect(() => {        
        return () => {
            /*dispatch({type:'clienteReset'}) 
            dispatch({type:'publicacionReset'}) 
        dispatch({type:'sorarioReset'}) */};
    }, []);

return(
    <div className="content">
        <div className="main-contenido">             
            <div className="navigador">
               <Row>
                    <Col md="2" className="tinta">Publicaciones</Col>
                    <Col md="1"></Col>
                    <Col md="4"><b>Nombre: </b> {citem.nombres} </Col>                    
                    <Col md="2"><b>Teléfono: </b> {citem.telefono} </Col>                    
                    
               </Row>
            </div>            
            <div className="navigador">
               <Row>               
                <Col md="4">
                    <FormPublicacion 
                    item={item} 
                    handleChange={handleChange}                     
                    submitHandle={submitHandle}
                    />
                </Col>
                <Col md="8">
                <TablePublicacion 
                    data={data} 
                    handleEdit={handleEdit}
                    toggleModalView={toggleModalView}                              
                    toggleModalViews={toggleModalViews}
                    handleDelete={handleDelete}
                />
                <Pagination 
                    chargeData={chargeData}
                    total={total}
                    paginas={paginas}
                    current={pagina}            
                /> 
                </Col>
               </Row>
            </div>
            <Modal isOpen={modalView} toggle={toggleModalView} className="modalMapa">
                <Button className="btn-view btn-danger" onClick={()=> toggleModalView()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>  
                <ModalBody>
                <Button onClick={() => submitHandles() } className="btn-zx btn-success">
                    <FontAwesomeIcon icon={faSave} />
                </Button>
                    <Mapa
                    submitHandles={submitHandles}
                    />
                </ModalBody>
            </Modal>

            <Modal isOpen={modalViews} toggle={toggleModalViews} className="modalMapa">
                <Button className="btn-view btn-danger" onClick={()=> toggleModalViews()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>  
                <ModalBody>
                <Button onClick={() => submitHandles() } className="btn-zx btn-success">
                    <FontAwesomeIcon icon={faSave} />
                </Button>                
                <Row>
                    <Col md="6">
                        <ClienteImagen 
                            item={item}
                            payload={'f1'}
                            payloads={'f1'}
                            order={item.filename1}
                        />
                    </Col>
                    <Col md="6">
                        <ClienteImagen 
                            item={item}
                            payload={'f2'}
                            payloads={'f2'}
                            order={item.filename2}
                        />    
                    </Col>
                </Row>
                <Row>    
                    <Col md="6">    
                        <ClienteImagen 
                            item={item}
                            payload={'f3'}
                            payloads={'f3'}
                            order={item.filename3}
                        />
                    </Col>
                    <Col md="6">
                        <ClienteImagen 
                            item={item}
                            payload={'f4'}
                            payloads={'f4'}
                            order={item.filename4}
                        />    
                    </Col>
                </Row>
                   
                </ModalBody>
            </Modal>
        </div>          
    </div>
    )
}

export default PublicacionesTable