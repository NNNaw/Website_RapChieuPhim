import React, { Component } from 'react'
import link from '../../assets/images/download (3).jpg'
export default class Carousel extends Component {
    render() {
        return (
            <div className="Carousel_container container my-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/banner1.jpg" alt="First slide" width="100%" height={500}/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner8.jpg" alt="Second slide" width="100%" height={500} />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner2.jpg" alt="Third slide" width="100%" height={500} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        )
    }
}
