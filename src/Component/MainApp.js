import Products from "./Pages/Products"
import {Routes , Route} from 'react-router-dom'
import SideBar from "./Pages/SideBar"
import './Main.scss'
function MainApp()
{
   
    return(
        <>

        <section className=" row sec">

            <SideBar/>
            <Routes>
            <Route path="Products" element={<Products/>}></Route>
            </Routes>
        
        </section>

        </>
    )
}
export default MainApp