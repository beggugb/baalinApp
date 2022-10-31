/** [payloadAction] */
const date = "2022-01-01"
const initialState = {
    data: [],
    items:[],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    modalView:false,
    item:{  
        label: "",
        direccion:"",
        condiciones:"",
        contrato:"",
        inmobiliaria:"",
        ivigencia:date,
        fvigencia:date,
        portada:"default.jpg",
        filename1:"default.jpg",
        filename2:"default.jpg",
        filename3:"default.jpg",
        filename4:"default.jpg",
        moneda:"Bolivianos",        
        latitude: -17.7864665,
        longitude: -63.1687135,
        caracteristicas:"",
        precio:0,
        pago:"contado",
        carcateristicas:"",
        estado:false,
        tipo:"alquiler",
        likes:0,
        views:0,
        categoriaId:0,
        clienteId:0
    }
}

export function publicacion(state = initialState, action){
    switch(action.type){
        case 'publicacionesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'publicacionChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'publicacionAdd':
            return{
                ...state,
                item: action.response
            }
        case 'publicacionReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                modalView: false,
                data:[],
                items:[]
            } 
        case 'publicacionIndicador':
            return{
                ...state,
                indicador: action.response
            } 
        case 'publicacionView':
            return{
                ...state,
                modalView: action.response
            } 
        case 'publicacionViews':
                return{
                    ...state,
                    modalViews: action.response
            }       
        case 'publicacionLocation':              
            return{
                ...state,
                item:
                {...state.item,
                    latitude: action.latitude,
                    longitude: action.longitude
                }
            }
        default:
            return state;
    }

}