import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { dangNhapACtion } from '../../Redux/Actions/QuanLyNguoiDungAction'
class SignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                taiKhoan: '',
                matKhau: '',
            }
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            value: { ...this.state.value, [name]: value }
        }, () => {
            console.log(this.state.value)
        })

    }
    handleErrors = () =>{
        
    }
    submitForm = (event) => {
        event.preventDefault();
        this.props.dangNhapNguoiDung(this.state.value);// xử lý đăng nhập
        this.props.history.push('/');
    }
    render() {
        return (
            <div className='SignInPage_container container-fluid'>
                <div className="SignInPage_left">

                </div>
                <div className="SignInPage_right">

                    <div className="form-content">
                        <h3 className="form-content_title">ĐĂNG NHẬP</h3>
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tài Khoản</label>
                                <input type="text" onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="taiKhoan" onChange={this.handleChange} value={this.state.value.taiKhoan} name='taiKhoan' placeholder="Nhập vào tài khoản" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Mật khẩu</label>
                                <input type="password" onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="matKhau" onChange={this.handleChange} value={this.state.value.matKhau} name='matKhau' placeholder="Nhập vào mật khẩu" />

                            </div>

                            <button className="button_login">
                                <p className='button_sign_in_css' type = 'submit'>Đăng nhập</p>
                            </button>
                            <button className="button_sign_up">
                                <NavLink to="/dangky"><p className="button_sign_up_css">Đăng ký</p></NavLink>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangNhapNguoiDung: (user) => {
            dispatch(dangNhapACtion(user));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(SignInPage);

