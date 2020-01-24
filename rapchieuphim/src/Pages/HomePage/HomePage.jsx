import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import {connect} from 'react-redux'
import {layTatCaDanhSachPhimAction} from '../../Redux/Actions/DanhSachPhimAction'
import Banner from '../../Components/Banner/Banner'
import Carousel from '../../Components/Carousel/Carousel'
import Footer from '../../Components/Footer/Footer'
class HomePage extends Component {
    
    componentDidMount() {
        this.props.layDanhSachPhim();

    }
    render() {
        
        return (
            <div>
                <Header />
                <Carousel />
                <Banner mangDanhSachPhim = {this.props.mangDanhSachPhim} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDanhSachPhim: state.QuanLyDanhSachPhimReducer.danhSachPhim
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDanhSachPhim : () =>{
            dispatch(layTatCaDanhSachPhimAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
