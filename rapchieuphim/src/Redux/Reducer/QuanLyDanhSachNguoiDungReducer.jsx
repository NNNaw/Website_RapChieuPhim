import { actionTypes } from "../Contants/DanhSachNguoiDungContant";

const initialState = {
    user: JSON.parse(localStorage.getItem('userLogin')) || null,
}

export const QuanLyDanhSachNguoiDungReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.DANG_NHAP: {
            state.user = action.taiKhoan;
            return { ...state }
        };
    }
    
    return { ...state }
}