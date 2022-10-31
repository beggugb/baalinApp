import {combineReducers} from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr';
import { usuario } from './usuario.reducer'
import { cliente } from './cliente.reducer'
import { categoria } from './categoria.reducer'
import { publicacion } from './publicacion.reducer'


const rootReducer = combineReducers({
    usuario,
    cliente,    
    categoria,    
    publicacion,    
    toastr: toastrReducer
})

export default rootReducer;