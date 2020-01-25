import swal from 'sweetalert';
import axios from 'axios';
import { settings } from '../../Commom/Config/settings';



export const dangKyNguoiDungAction = (user, handleClear , handleErrorBackend) => {
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