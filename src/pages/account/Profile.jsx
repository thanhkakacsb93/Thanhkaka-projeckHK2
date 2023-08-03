import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import StorContext from '../../contexts/stor'

const Profile = () => {
    const { stateloginUser, setstateloginUser, stateloginAdm, setstateloginAdm } = useContext(StorContext)
    const navigat = useNavigate()
    const lognoutHandel = () => {
        // confirm('bạn muốn đăng xuất')
        if (confirm('bạn muốn đăng xuất')) {
            console.log('click')
            sessionStorage.clear('account')
            if (stateloginUser === true) {
                setstateloginUser(false)
            }
            if (stateloginAdm === true) {
                setstateloginAdm(false)
            }
            navigat("/login")
        }
    }
    return (
        <>
            <p>img</p>
            <p>tên</p>
            <p>email</p>
            <p>số điện thoại</p>
            <button onClick={lognoutHandel}>đăng xuất</button>
        </>

    )
}

export default Profile