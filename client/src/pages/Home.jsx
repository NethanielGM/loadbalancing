import React, { useEffect } from 'react';
import Slider from '../components/slider/Slider';
import Footer from '../components/footer/Footer';
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
                title_1: "Load balancing is fun!",
                title_2: `IP ${data.publicIp}`,
                description: "This app balances the load on a server and displays the container IP. Using: ReactJS, NodeJS, Docker, Nginx. Deployed with S3 And EC2",
                img: img1,
                imgbg: imgbg1,
                class: 'center'
            }
        ]
    }
    const getPublicIP = async () => {
        try {
            const res = await axios.get(`http://18.204.201.32:9090`)
            console.log(res.data);
            setData({ publicIp: res.data.publicIp })
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
            <Footer />
        </div>
    );
}

export default Home;
