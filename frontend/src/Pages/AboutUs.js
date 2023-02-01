// import React from 'react'

// const AboutUs = () => {
//   return (
//     <div className='container p-3'>
//       <h2 style={{ color: "white" }}>AboutUs</h2>
//       <center> <img className='col-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrjt_VksxXsG64GEaZgTUFSAyEj4Fpf8NLQ&usqp=CAU' width="300" height="180" ></img></center>
//       <p style={{ color: "white" }}>Our reputation for outstanding care and family-like atmosphere, together with advanced medical
//         technology and facilities ensures we attract leading consultants and specialists from the industry
//         to work with us. All our clinicians are board-certified and come with very high credentials within
//         e fully qualified and registered with the Nursing Council.
//         At Samba Hospitals we are committed to providing our patients with advanced medical and surgical treatments
//         with access to the latest treatment technology available.
//         <br></br>
//         Samba Hospitals is committed to providing high quality, cost-efficient healthcare in its hospitals and clinics.
//         We are able to provide free, no-obligation quotes for a wide range of treatments, consultations and tests to our
//         self-pay patients. We also provide care to insurance patients. For more informsection. We provide care to both patients with insurance and those who wish to pay
//         for their own care. We continuously outperform the industry benchmarks in medical outcomes. Our expert team of doctors and
//         nurses are available to round the clock to monitor the progress of our patients.</p>
//     </div>
//   )
// }

// export default AboutUs
import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (<div className='container p-3'>
      <h1 className='d-none d-md-block p-0 text-white' style={{ fontWeight: "700", fontSize: "32px", marginLeft: "0%" }}> Hospital Mangement System</h1>
      <h3 className='text-white' title='AboutUs'>AboutUs</h3>
      <> <p className='text-white'>Our reputation for outstanding care and family-like ,its more like a home,feel free to contact for any information,atmosphere, together with advanced medical
        <div data-testid="Img div" > <img className='col-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NRMoIhQrSMwUPIiguW_hWG7RC15ha2j0jA&usqp=CAU' width="300" height="180" ></img></div>
        technology and facilities ensures we attract leading consultants and specialists from the industry
        to work with us. All our clinicians are board-certified and come with very high credentials within
        e fully qualified and registered with the Nursing Council.
        At Samba Hospitals we are committed to providing our patients with advanced medical and surgical treatments
        with access to the latest treatment technology available.
        <br></br>
        Samba Hospitals is committed to providing high quality, cost-efficient healthcare in its hospitals and clinics.
        We are able to provide free, no-obligation quotes for a wide range of treatments, consultations and tests to our
        self-pay patients. We also provide care to insurance patients. For more informsection. We provide care to both patients with insurance and those who wish to pay
        for their own care. We continuously outperform the industry benchmarks in medical outcomes. Our expert team of doctors and
        nurses are available to round the clock to monitor the progress of our patients.</p>
      </>
    </div>)
  }
}
