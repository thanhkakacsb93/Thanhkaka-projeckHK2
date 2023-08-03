import { PlusOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import "./AddProduct.scss"
// import Meta from 'antd/es/card/Meta'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    // let NewProduct = {
    //     img: "",
    //     nameProduct: "",
    //     promotion: '',
    //     price: ''

    // }
    const navigateFormAddProduct = useNavigate()
    const Addproducthandle = () => {
        navigateFormAddProduct('addproduct')
    }
    return (
        <Card onClick={Addproducthandle}
            className='box-Addcard'

        >
            <PlusOutlined className='iconAdd' />
        </Card>
    )
}

export default AddProduct