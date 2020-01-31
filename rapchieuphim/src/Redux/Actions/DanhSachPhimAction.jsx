import {actionTypes} from '../Contants/DanhSachPhimContant';
import axios from 'axios';
import {settings} from '../../Commom/Config/settings';


export const layTatCaDanhSachPhimAction = () =>{
    return dispatch =>{
        axios({
            url : settings.domain + '/QuanLyPhim/LayDanhSachPhim',
            method : 'GET'
        }).then(result =>{
            dispatch({
                type:actionTypes.LAY_TAT_CA_DANH_SACH_PHIM,
                mangDanhSachPhim: result.data
            });
        }).catch(erorr =>{
            console.log(erorr.response)
        })
    }
}