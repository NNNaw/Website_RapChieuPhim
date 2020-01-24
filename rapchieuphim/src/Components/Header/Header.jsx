import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import "../../assets/scss/main.scss"
export default class Header extends Component {
    render() {
        return (
            
            <div className="header_Container container-fluid">
                <div className="row1 row">

                    <div className="header_logo col-4">
                       <img src={logo} alt=""/>
                    </div>
                    <div className="header_work col-5">
                        <ul className="tag_ul d-flex">
                            <li><a href="">Trang chủ</a></li>
                            <li><a href="">Liên hệ</a></li>
                            <li><a href="">Ứng dụng</a></li>
                            <li><a href="">Tin tức</a></li>
                        </ul>
                    </div>
                    <div className="header_search col-3">
                       <button className="button_sign_up">Đăng ký</button>
                       <button className="button_login">Đăng nhập</button>
                    </div>
                </div>

            </div>
        )
    }
}
