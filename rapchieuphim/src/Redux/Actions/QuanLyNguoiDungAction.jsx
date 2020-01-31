import * as swal from 'sweetalert2';
import axios from 'axios';
import { settings } from '../../Commom/Config/settings';
import { actionTypes } from '../Contants/DanhSachNguoiDungContant'


export const dangKyNguoiDungAction = (user, handleClear) => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/DangKy',
            method: 'POST',
            data: user
        }).then(result => {
            console.log(result.data);
            //dispatch();
            swal({
                icon: "success",
                title: "Thêm thành công",

            });
            handleClear();
        }).catch(erorr => {
            console.log(erorr.response)
            swal({
                icon: "warning",
                title: "Đăng ký không thành công.",
                text: erorr.response.data,
                dangerMode: true,
            });
        })
    }
}
export const dangNhapACtion = (user) => {

    return dispatch => {

        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data: user,

        }).then(result => {
          
            localStorage.setItem(settings.userLogin, JSON.stringify(result.data));
            localStorage.setItem(settings.token, result.data.accessToken);

            dispatch({
                type: actionTypes.DANG_NHAP,
                taiKhoan: result.data,
            })
          
        }).catch(error => {
            console.log(error.response.data);
            swal.fire('Thông báo đăng nhập' , error.response.data, 'error');
         
        })
    }
}