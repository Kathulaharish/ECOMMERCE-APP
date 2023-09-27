import React from 'react'
import Layout from '../components/Layout/Layout'

const About = ()=>{
    return (
        <Layout title={'About us - Ecommerce APP'}>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src="/images/about.jpeg" alt="contactus" style={{width: "100%"}} />
                </div>
                <div className='col-md-4'>
                    <p className='text-justify mt-2'>
                    Experience the ultimate in online shopping with our cutting-edge ecommerce app. Discover a vast array of products
                     at your fingertips, enjoy secure transactions, and benefit from personalized recommendations. Navigate effortlessly 
                     through user-friendly interfaces, track your orders in real-time, and elevate your shopping 
                     journey with exclusive deals. Welcome to the future of convenient and enjoyable online shopping, 
                     right from the palm of your hand!
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About