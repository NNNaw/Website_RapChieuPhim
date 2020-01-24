import { combineReducers } from 'redux';
import { QuanLyDanhSachPhimReducer } from './Reducer/QuanLyDanhSachPhimReducer'

export const rootReducer = combineReducers({
    // chứa từng reducer cho từng nghiệp vụ
    QuanLyDanhSachPhimReducer,
});