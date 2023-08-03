import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import StorContext from '../../contexts/stor'
import AddProduct from './addProduct/AddProduct'
import "./Home.scss"

const Home = () => {
    const { stateloginUser, stateloginAdm } = useContext(StorContext)
    const navigate = useNavigate()
    const ProductHandle = () => {
        navigate(":id")
    }
    let Product
    if (stateloginUser === true) {
        console.log("xin chao user");
    }
    if (stateloginAdm === true) {
        Product = <AddProduct />
    }
    return (
        <>
            <div className='boxHome'>
                <Card className='card' onClick={ProductHandle}>
                    <div className='card-img'>
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" />
                    </div>
                    <div>
                        <p>tên</p>
                        <p>giá trừ khuyến mãi</p>
                        <p>giá gốc</p>
                    </div>
                </Card>

                {Product}
            </div>

        </>

    )
}

export default Home