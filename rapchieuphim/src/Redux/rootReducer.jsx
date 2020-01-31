import { combineReducers } from 'redux';
import { QuanLyDanhSachPhimReducer } from './Reducer/QuanLyDanhSachPhimReducer'
import {QuanLyDanhSachNguoiDungReducer} from './Reducer/QuanLyDanhSachNguoiDungReducer'
export const rootReducer = combineReducers({
    // chứa từng reducer cho từng nghiệp vụ
    QuanLyDanhSachPhimReducer,
    QuanLyDanhSachNguoiDungReducer,
});