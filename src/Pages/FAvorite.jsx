import React, { useContext } from 'react'
import Maincontext from '../Context/context'
import { Toaster } from 'react-hot-toast'

const FAvorite = () => {
    const {fav,deleteFromFav,RemoveAllFav}=useContext(Maincontext)

  return (
     <div className=''>
        
        <button className='btn btn-warning' onClick={()=>{
            RemoveAllFav()
        }}>remove All</button>
<table className="table table-secondary">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Company Name</th>
      <th scope="col">ContactTitle</th>
      <th scope="col">Adress</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        fav.map((item,index)=>{
            return (
                <tr key={index}>
      <th scope="row">{item.id}</th>
      <td>{item.companyName}</td>
      <td>{item.contactTitle}</td>
      <td>{item.address.city ? item.address.city : 'salam'}</td>
      <td><button className='btn btn-danger' onClick={()=>{
        deleteFromFav(item)
      }}>delete</button></td>
    
    </tr>
            )
        })
    }


  </tbody>
  </table>

<Toaster/>      
    </div>
  )
}

export default FAvorite
