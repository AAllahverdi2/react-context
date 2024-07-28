import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./Add.css"
import Maincontext from "../Context/context"
import axios from 'axios';
const AddCustomers = () => {
    const { data, setData, search, setSearch } = useContext(Maincontext)
    console.log("add", data)
    const formik = useFormik({
        initialValues: {
            companyName: '',
            contactTitle: '',
            city: '',
            country: '',
        },
        validationSchema: Yup.object({
            companyName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            contactTitle: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            country: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            city: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),

        }),
        onSubmit: values => {
            axios.post("https://northwind.vercel.app/api/customers",values).then(res=>{
                setData([...data,res.data])
                setSearch([...search,res.data])
            })
            formik.resetForm()
            },
          });


    return (
        <div className='all__Form'>
            <form onSubmit={formik.handleSubmit}>
                <div className='name__box'>
                    <label htmlFor="companyName">Company  Name :</label>
                    <div className='inp__div'>
                        <input
                            id="companyName"
                            name="companyName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.companyName}
                        />
                    </div>
                    {formik.touched.companyName && formik.errors.companyName ? (
                        <div>{formik.errors.companyName}</div>
                    ) : null}
                </div>

                <div className='title__box'>
                    <label htmlFor="contactTitle">Contact-Title :</label>
                    <div className='inp__div'>
                        <input
                            id="contactTitle"
                            name="contactTitle"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.contactTitle}
                        />
                    </div>
                    {formik.touched.contactTitle && formik.errors.contactTitle ? (
                        <div>{formik.errors.contactTitle}</div>
                    ) : null}
                </div>

                <div className='country__box'>
                    <label htmlFor="country">Country :</label>
                    <div className='inp__div'>
                        <input
                            id="country"
                            name="country"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                        />
                    </div>
                    {formik.touched.country && formik.errors.country ? (
                        <div>{formik.errors.country}</div>
                    ) : null}
                </div >
                <div className='city__box'>
                    <label htmlFor="city">City :</label>
                    <div className='inp__div'>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        />
                    </div>
                    {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                    ) : null}
                </div>

                <button className='btn btn-info' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCustomers
