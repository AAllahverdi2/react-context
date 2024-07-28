import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Maincontext from './Context/context'
import ROUTES from './index.Routes';
import axios from 'axios';
import toast from 'react-hot-toast';


const router = createBrowserRouter(ROUTES)

const App = () => {
  const [data, setData] = useState([])
  const [fav, setFav] = useState(localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : [])
  const [search,setSearch]=useState([])
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/customers").then(res => {
      console.log(res.data)
      setData(res.data)
      setSearch(res.data)
    })
  }, [])

  function AddtoFav(product: any) {
    const target = fav.find((item: any) => item.id == product.id)
    if (target) {
      alert("artig movcuddur")
    } else {
      setFav([...fav, product])
      localStorage.setItem("fav", JSON.stringify([...fav, product]))
      toast.success("added to favorite succesfullt")
    }
  }
  function deleteFromFav(prod: any) {
    const target = fav.find((item: any) => item.id == prod.id)
    fav.splice(fav.indexOf(target), 1)
    setFav([...fav])
    localStorage.setItem("fav", JSON.stringify([...fav]))
    toast.success("deleted data")
  }
  function RemoveAllFav() {
    setFav([])
    localStorage.setItem("fav", JSON.stringify([]))

  }
  function deletedData(id: any) {
    axios.delete(`https://northwind.vercel.app/api/customers/${id}`).then(res => {
      const target = data.find(item => item.id == id)
      data.splice(data.indexOf(target), 1)
      setData([...data])
      toast.success("deleted data")
    })
  }
  function handlerSearch(valuee:any) {
    if(valuee==""){
      setData([...search])
    }
    else{
     const target=search.filter((item)=>item.companyName.trim().toLowerCase().includes(valuee))
    setData([...target])
    }
    
  }
  const HAndlerSorty=(e)=>{
    const sorting=e.target.value
    if(sorting=="df"){
      setData([...search])
    }
    else if(sorting=="az"){
      const target=data.sort((a,b)=>a.companyName.localeCompare(b.companyName))
      setData([...target])
    }
    else if(sorting=="za"){
      const target=data.sort((a,b)=>b.companyName.localeCompare(a.companyName))
      setData([...target])
    }
  }


  const values = {
    data,
    AddtoFav,
    fav,
    deleteFromFav,
    RemoveAllFav,
    deletedData,
    handlerSearch,
    HAndlerSorty,
    setData,
    search,
    setSearch
  }

  return (
    <div>
      <Maincontext.Provider value={values}>
        <RouterProvider router={router} />
      </Maincontext.Provider>

    </div>
  )
}

export default App
