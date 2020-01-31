import { actionTypes } from "../Contants/DanhSachPhimContant";

const initialState = {
    danhSachPhim: [],
}

export const QuanLyDanhSachPhimReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LAY_TAT_CA_DANH_SACH_PHIM: {
            state.danhSachPhim = action.mangDanhSachPhim;
           
            return {...state}
        }
    }
    
    return { ...state }
}