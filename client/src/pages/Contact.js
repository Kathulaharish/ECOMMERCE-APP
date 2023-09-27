import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = ()=>{
    return(
        <Layout>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src="/images/contactus.jpeg" alt="contactus" style={{width: "100%"}} />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                    <p className='text-justify mt-2'>
                    Reach out to us for seamless support and assistance. Our dedicated team is here to address 
                    your inquiries and ensure a positive experience.
                    </p>
                    <p className='mt-3'>
                        <BiMailSend/> : www.help@commerceApp.com
                    </p>
                    <p className='mt-3'>
                        <BiPhoneCall/> : +91 93478-19286
                    </p>
                    <p className='mt-3'>
                        <BiSupport/> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;