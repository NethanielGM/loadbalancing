import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'
import imgbg from '../../assets/images/backgroup-secsion/img_bg_page_title.jpg'


const Slider = props => {
    const data = props.data
    const getPublicIP = props.getPublicIP
    return (
        <div className="mainslider" >
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} >
                            <SliderItem key={index} item={item} getPublicIP={getPublicIP} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    );
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}
const SliderItem = props => (
    <div className="flat-title-page" style={{ backgroundImage: `url(${imgbg})`, height: "auto" }}>
        <img className="bgr-gradient gradient1" src={shape1} alt="" />
        <img className="bgr-gradient gradient2" src={shape2} alt="" />
        <img className="bgr-gradient gradient3" src={shape3} alt="" />
        <div className="shape item-w-16"></div>
        <div className="shape item-w-22"></div>
        <div className="shape item-w-32"></div>
        <div className="shape item-w-48"></div>
        <div className="shape style2 item-w-51"></div>
        <div className="shape style2 item-w-51 position2"></div>
        <div className="shape item-w-68"></div>
        <div className="overlay"></div>
        <div className="swiper-container mainslider home">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slider-item">
                        <div className="themesflat-container ">
                            <div className="wrap-heading flat-slider flex">
                                <div className="content">
                                    <h2 className="heading">{props.item.title_1}</h2>
                                    <h1 className="heading mb-style"><span className="tf-text s1">{props.item.title_2}</span>
                                    </h1>
                                    <h1 className="heading">{props.item.title_3}</h1>
                                    <p className="sub-heading">{props.item.description}
                                    </p>
                                    <div className="flat-bt-slider flex style2">
                                        <button to="" onClick={() => props.getPublicIP()} className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Refresh
                                        </span></button>
                                    </div>
                                </div>
                                <div className="image">
                                    <img className="img-bg" src={props.item.imgbg} alt="" />
                                    <img src={props.item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >



)
export default Slider;
