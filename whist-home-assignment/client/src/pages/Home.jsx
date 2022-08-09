import React, { useEffect } from 'react';
import Slider from '../components/slider/Slider';
import axios from 'axios'
import img1 from '../assets/images/slider/header-img.svg'
import imgbg1 from '../assets/images/slider/bg_slide_1.png'
import { useState } from 'react';
const Home = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    let heroSliderData
    if (error) {
        heroSliderData = [
            {
                title_1: "Oops something went wrong",
                title_2: `${error}`,
                img: img1,
                imgbg: imgbg1,
                class: 'center'
            }
        ]
    } else {
        heroSliderData = [
            {
                title_1: "Your IP is",
                title_2: `${data.publicIp} ${data.url}`,
                description: "< hire me ?>",
                img: img1,
                imgbg: imgbg1,
                class: 'center'
            }
        ]
    }
    const getPublicIP = async () => {
        try {
            const res = await axios.get(`http://localhost:3000`)
            console.log(res.data);
            setData({ publicIp: res.data.publicIp, url: res.data.url })
        } catch (err) {
            console.log(err);
            setError(`${err.message}`);
        }
    }
    useEffect(() => {
        getPublicIP()
        return () => {
            getPublicIP()
        }
    }, [])

    return (
        <div className='home-3'>
            <Slider data={heroSliderData} />
        </div>
    );
}

export default Home;
