import { Input } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useContext } from 'react';
import StorContext from '../../contexts/stor';
import { useEffect } from 'react';


const Header = () => {

    const { stateloginUser, setstateloginUser, stateloginAdm, setstateloginAdm } = useContext(StorContext)
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const dataSessionStorageUser = JSON.parse(sessionStorage.getItem("account"))
    console.log("dataSessionStorage", dataSessionStorageUser)
    if (dataSessionStorageUser) {
        const checkUsernameDataSessionStorage = dataSessionStorageUser.Username.includes("adm")
        console.log('checkUsernameDataSessionStorage', checkUsernameDataSessionStorage)
        if (checkUsernameDataSessionStorage === true) {
            useEffect(() => { setstateloginAdm(true) }, [stateloginAdm])
        }
        else {
            useEffect(() => { setstateloginUser(true) }, [stateloginUser])
        }
    }
    let account
    if (stateloginUser === false && stateloginAdm === false) {
        account = <NavLink to="/login " className="Link">Đăng nhập</NavLink>
    }
    else {
        account = <NavLink to="contact" className="Link">Tài khoản</NavLink>
    }

    // if (stateloginAdm === true) {
    //     account = <NavLink to="contact" className="Link">Tài khoản</NavLink>
    // }
    // else {
    //     account = <NavLink to="/login " className="Link">Đăng nhập</NavLink>
    // }

    return (
        <header>
            <div className='box-Header'>
                <NavLink className="Link" to="/"><span>THANHKAKA</span></NavLink>
                <Search style={{ maxWidth: "400px" }} placeholder="input search text" onSearch={onSearch} enterButton />
                {account}
                <div>giỏ hàng <ShoppingCartOutlined /></div>
            </div>


        </header>
    )
}

export default Header