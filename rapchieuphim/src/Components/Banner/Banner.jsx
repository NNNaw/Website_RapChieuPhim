import React, { Component } from 'react'

export default class Banner extends Component {



    renderRate = (number) => {
        switch (number) {
            case 1: {
                return (
                    <div className="banner_rate">
                        <i class="fas fa-star"></i>
                    </div>
                )
            }
            case 2: {
                return (
                    <div className="banner_rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                )
            }
            case 3: {
                return (
                    <div className="banner_rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                )
            }
            case 4: {
                return (
                    <div className="banner_rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                )
            }
            case 5: {
                return (
                    <div className="banner_rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                )
            }
            default:
                return (
                    <div className="banner_rate">
                        <i class="fas fa-star"></i>
                    </div>
                )
        }
    }

    renderDanhSachPhim = () => {
        let { mangDanhSachPhim } = this.props;

        return mangDanhSachPhim.map((phim, index) => {
            var thoiGian = phim.ngayKhoiChieu.slice(0, 4);
            return (
                <div className="col-3 my-3" index={index}>
                    <div className="card banner_card">
                        <img className="card-img-top" src={phim.hinhAnh} alt='error' width='100%' height={300} />
                        <div className="card-body" >
                            <div className="banner_info">
                                <span>{phim.tenPhim}</span>
                                <span>({thoiGian})</span>
                            </div>
                            {this.renderRate(phim.danhGia)}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {

        return (
            <div className="Banner_container container">
                <div className="banner_content row">
                    {this.renderDanhSachPhim()}
                </div>
            </div>
        )
    }
}
