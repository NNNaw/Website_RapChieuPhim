import { actionType } from "../Contants/DanhSachPhimContant";

const initialState = {
    danhSachPhim: [],
}

export const QuanLyDanhSachPhimReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.LAY_TAT_CA_DANH_SACH_PHIM: {
            state.danhSachPhim = action.mangDanhSachPhim;
            console.log('Nam');
            return {...state}
        }
    }
    
    return { ...state }
}