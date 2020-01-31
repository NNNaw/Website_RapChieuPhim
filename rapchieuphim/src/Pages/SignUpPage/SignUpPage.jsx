import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dangKyNguoiDungAction } from '../../Redux/Actions/QuanLyNguoiDungAction';
import { NavLink } from 'react-router-dom'
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP14",
                maLoaiNguoiDung: "khachHang",
                hoTen: "",
            },
            errors: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                hoTen: "",
                matkhau: "",
            },
            valid: true,
            matkhau: '',

        }
    }

    handleChange = (event) => {
        let name = event.target.name;

        let value = event.target.value;
        this.setState({
            value: { ...this.state.value, [name]: value }
        })

    }
    handleClear = () => {
        this.setState({
            value: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP14",
                maLoaiNguoiDung: "khachHang",
                hoTen: "",
            }
        })
        document.getElementById('matkhau').value = '';
    }
    handleError = (event) => {
        //dành riêng cho mật khẩu,
        let { name, value } = event.target;

        let Errors = value === '' ? 'mật khẩu không được bỏ trống !' : '';

        this.setState({
            errors: { ...this.state.errors, [name]: Errors }
        })
    }
    handleErrors = (event) => {
        //xử lý lổi phần user
        let { name, value } = event.target;
        let nameInput = '';
        switch (name) {
            case "taiKhoan":
                nameInput = "Tài khoản"
                break;
            case "matKhau":
                nameInput = "Xác nhận mật khẩu"
                break;
            case "soDt":
                nameInput = "Số điện thoại"
                break;
            case "email":
                nameInput = "Email"
                break;
            case "hoTen":
                nameInput = "Họ tên"
                break;
            default:
                break;
        }
        //xử lý trống
        let Errors = value === '' ? nameInput + ' không được bỏ trống!' : '';

        //xử lý định dạng email
        if (name === 'email' && Errors === '') {
            let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!regex.test(value)) {
                Errors = 'Email này không đúng định dạng!'
            }
        }
        //xử lý định dạng số điện thoại
        if (name === 'soDt' && Errors === '') {
            let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
            if (!regex.test(value)) {
                Errors = 'Số điện thoại không đúng định dạng!'
            }
        }

        this.state.valid = Errors !== '' ? true : false;
        this.setState({
            errors: { ...this.state.errors, [name]: Errors }
        })

    }


    handleErrorBackend = (error) => {
        //XỬ LÝ PHẦN ERROR BACKEND
        console.log(error);
    }
    submitForm = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <div className="SignUpPage container-fluid">

                <div className="SignUpPage_left">

                </div>
                <div className="SignUpPage_right">

                    <div className="form-content">
                        <h3 className="form-content_title">ĐĂNG KÝ</h3>
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tài Khoản</label>
                                <input type="text" onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="taiKhoan" onChange={this.handleChange} value={this.state.value.taiKhoan} name='taiKhoan' placeholder="Nhập vào tài khoản" />
                                <div className='alert'>{this.state.errors.taiKhoan}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Mật khẩu</label>
                                <input type="password" onKeyUp={this.handleError} onBlur={this.handleError} className="form-control" id="matkhau" placeholder="Nhập vào mật khẩu" />
                                <div className="alert">{this.state.errors.matkhau}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nhập lại mật khẩu</label>
                                <input type="password" onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="matKhau" onChange={this.handleChange} value={this.state.value.matKhau} name='matKhau' placeholder="Nhập lại vào mật khẩu" />
                                <div className="alert">{this.state.errors.matKhau}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Họ tên</label>
                                <input type="text" onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="hoTen" onChange={this.handleChange} value={this.state.value.hoTen} name='hoTen' placeholder="Nhập vào họ tên" />
                                <div className="alert">{this.state.errors.hoTen}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="email" onChange={this.handleChange} value={this.state.value.email} name='email' placeholder="Nhập vào email" />
                                <div className="alert">{this.state.errors.email}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                                <input type='text' onKeyUp={this.handleErrors} onBlur={this.handleErrors} className="form-control" id="soDt" onChange={this.handleChange} value={this.state.value.soDt} name='soDt' placeholder="Nhập vào số điện thoại" />
                                <div className="alert">{this.state.errors.soDt}</div>
                            </div>

                            <button onClick={() => { this.props.dangKyNguoiDung(this.state.value, this.handleClear) }} className="button_sign_up">
                               <p className='button_sign_up_css'>Đăng ký</p>
                            </button>
                            <button className="button_login">
                                <NavLink  to="/dangnhap"><p className="button_sign_in_css">Đăng Nhập</p></NavLink>
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
        dangKyNguoiDung: (user, handleClear) => {
            dispatch(dangKyNguoiDungAction(user, handleClear));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(SignUpPage);
