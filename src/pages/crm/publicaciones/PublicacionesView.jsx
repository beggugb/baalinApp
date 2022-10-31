import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import PublicacionesTable  from './components/Screens/PublicacionesTable'


const PublicacionesView = () =>{   
    return(
        <>                 
        <Routes>                
            <Route path="/" element={<PublicacionesTable />}/>                                                    
        </Routes>
        <Outlet/>       
        </>         
    )
}

export default PublicacionesView