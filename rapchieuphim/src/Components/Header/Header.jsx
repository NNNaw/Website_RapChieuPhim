import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import "../../assets/scss/main.scss"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    renderButton = () => {
        return (
            <div>
                <button className="button_login">
                    <NavLink to="/dangnhap"><p className="button_sign_in_css">Đăng nhập</p></NavLink>
                </button>
                <button className="button_sign_up">
                    <NavLink to="/dangky"><p className="button_sign_up_css">Đăng ký</p></NavLink>
                </button>
            </div>
        )
    }

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
                        {this.renderButton()}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        user: state.QuanLyDanhSachNguoiDungReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Header);