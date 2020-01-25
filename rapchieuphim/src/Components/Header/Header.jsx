import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import "../../assets/scss/main.scss"
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (

            <div className="header_Container container-fluid">
                <div className="row1 row">

                    <div className="header_logo col-4">
                        <img src={logo} alt="" />
                    </div>
                    <div className="header_work col-5">
                        <ul className="tag_ul d-flex">
                            <li><a href="">Trang chủ</a></li>
                            <li><a href="">Liên hệ</a></li>
                            <li><a href="">Ứng dụng</a></li>
                            <li><a href="">Tin tức</a></li>
                        </ul>
                    </div>
                    <div className="header_sign col-3">
                        <button className="button_sign_up">
                            <NavLink className="button_sign_up_css" to="/dangky">Đăng Ký</NavLink>
                        </button>
                        <button className="button_login">
                            <NavLink className="button_sign_in_css" to="/dangnhap">Đăng Nhập</NavLink>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
