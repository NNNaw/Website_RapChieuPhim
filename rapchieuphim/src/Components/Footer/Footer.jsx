import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='Footer_container container-fluid'>
                <div className="footer_content">
                    <div className="footer_up row">
                        <div className="col-3">
                            <p className='footer_up_title'>123PHIM</p>
                            <div className="footer_up_docx row">
                                <div className="footer_up_docx_right col-6">
                                    <p><a>FAQ</a></p>
                                    <p><a>Branch Guidelines</a></p>
                                </div>
                                <div className="footer_up_docx_left col-6">
                                    <p><a>Thỏa thuận sử dụng</a></p>
                                    <p><a>Quy chế hoạt động</a></p>
                                    <p><a>Chính sách bảo mật</a></p>
                                    <p><a>Quyền lợi thành viện</a></p>
                                </div>
                            </div>
                        </div>


                        <div className="col-3">
                            <p className='footer_up_title'>ĐỐI TÁC</p>
                            <div className="row footer_partner">
                                <div className="footer_partner_icon">
                                    <img src="./images/bhd.png" alt="" />
                                    <img src="./images/plaza.png" alt="" />

                                    <img src="./images/lotte.png" alt="" />
                                    <img src="./images/line.png" alt="" />
                                    <img src="./images/vietcombank.png" alt="" />
                                    <img src="./images/momo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <p className='footer_up_title'>MOBILE APP</p>
                            <div className="footer_mobileApp">
                                <img src="./images/iconAndroid.png" alt="" />
                                <img src="./images/iconApple.png" alt="" />
                            </div>
                        </div>
                        <div className="col-3">
                            <p className='footer_up_title'>SOCIAL</p>
                            <div className="footer_social">
                                <img src="./images/facebook.png" alt="" />
                                <img src="./images/zalo.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer_down row">
                        <div className="col-9">
                            <div class="row">
                                <div className="col-3">
                                    <img src="./images/vinaGame.png" alt="" />
                                </div>
                                <div className="col-9">
                                    <h5>123PHIM-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION-MỘT THÀNH VIÊN CỦA CÔNG TY VNG</h5>
                                    <p>Địa chỉ: 52 NGuyễn Ngọc Lộc , Phường 14 , Quận 10 , Thành Phố Hồ Chí Minh</p>
                                    <p>Mã số thuế : 001705</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <img src="./images/boCongThuong.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
