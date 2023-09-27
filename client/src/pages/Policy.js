import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = ()=>{
    return(
        <Layout>
            <div className='row contactus'>
                <div className='col-md-6'>
                    <img src="/images/contactus.jpeg" alt="contactus" style={{width: "100%"}} />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>OUR PRIVACY POLICY</h1>
                    <p className='text-justify mt-2'>
                        <ol>
                            <li>We collect essential personal information during registration and transactions for an improved shopping experience.</li>
                            <li>Industry-standard protocols, encryption, and regular audits ensure the secure handling and storage of user data.</li>
                            <li>Trusted payment gateways guarantee the secure processing of financial data, adhering to industry standards.</li>
                            <li>Users have full control over privacy preferences, communication opt-outs, and the extent of shared personal data.</li>
                            <li>Third-party collaborations adhere to strict privacy standards, ensuring limited data sharing for seamless ecommerce operations.</li>
                        </ol>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Policy;