import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import { useSelector } from "react-redux"
import { CheckingAuth } from "../../ui/components/CheckingAuth"


export const JournalRoutes = () => {

  
  return (
    <Routes>

        <Route path="/" element={<JournalPage/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>

    </Routes>
  )
}


