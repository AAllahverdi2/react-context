import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Maincontext from '../Context/context'
const Header = () => {
    const {data}=useContext(Maincontext)
    return (
        <div className='header__All'>
<div className="header__left">
<Link to="/">Home</Link>      
{/* <h2></h2> */}
</div>
            <div className='header__Right'>
                <Link to="/FAvorite">Favorui</Link>
                <Link to="/AddCustomers">Add Customers</Link>
                <Link to="/CustomersList">CustomersList</Link>
            </div>
        </div>
    )
}

export default Header
