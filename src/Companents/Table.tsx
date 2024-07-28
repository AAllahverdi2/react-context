import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Toaster } from 'react-hot-toast'
const Table = () => {
    const { data, AddtoFav, deletedData, handlerSearch, HAndlerSorty } = useContext(Maincontext)
    console.log("object", data)
    return (
        <div className=''>
            <div style={{ paddingLeft: "120px" }}>
                <input style={{ width: "60%", height: "40px", borderRadius: "7px", borderColor: "gray", marginTop: "20px", padding: "10px" }} type="search" placeholder='search by name' onChange={(e) => {
                    handlerSearch(e.target.value)
                }} />
                <select style={{ width: "20%",height: "40px", borderRadius: "7px", borderColor: "gray", marginTop: "20px", padding: "10px",marginLeft:"20px"}} name="" id="" onChange={(e) => {
                    HAndlerSorty(e)
                }}>
                    <option value="df">defiult</option>
                    <option value="az">az</option>
                    <option value="za">za</option>

                </select>
            </div>
            <table style={{ marginTop: "20px" }} className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">ContactTitle</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Delete</th>
                        <th scope="col">ADD to Favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.companyName}</td>
                                    <td>{item.contactTitle}</td>
                                    <td>{item.address && item.address.city ? item.address.city : 'salam'}</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        deletedData(item.id)
                                    }}>delete</button></td>
                                    <td><button className='btn btn-primary' onClick={() => {
                                        AddtoFav(item)
                                    }}>add to fav</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

            <Toaster />
        </div>
    )
}

export default Table
