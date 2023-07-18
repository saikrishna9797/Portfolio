import './styles/Certificates.css';

import c1 from './images/certificates/dl.jpg'

import c7 from './images/certificates/tp.jpg'


import m1 from './images/certificates/m4.png'

import m2 from './images/certificates/app.png'



function Certificates() {

    const courseCertificates = [
        { 
            icon : c1 ,
            name : "Deep Learning Workshop"
        },
        
       
        { 
            icon : c7 ,
            name : "CODING CONTEST SEMI FINALIST"
        },
        {
            icon : m2,
            name : "Flutter Development Bootcamp With Dart"
        },
        {
            icon : m1,
            name : "Data Structures and Algorithms"
        },

       
    ]

    const meritCertificate = [
        // {
        //     icon : m1,
        //     name : "CBIT Hacktoberfest Hackathon"
        // },
        
    ]

    return ( 
        <div className='background'> 
        <div className='certificateTop'></div>
        {/* <h1 className='text-center p-3'>Skills</h1> */}
            <div className='bg-white'>
                <h3 className='text-center titles'>Course Completion Certificates and Certificates of Appriciation</h3>
                <div className='container my-5'>
                    <div className='row justify-content-around'>
                        {
                            courseCertificates.map(
                                        (ele) =>  <div className='col-10 col-md-5 col-lg-5 text-center eachCourseCertifiate '>
                                                            <img src={ele.icon} width="100%"/>
                                                            <p className='bg-black text-white mt-4 mb-0'>{ele.name}</p>
                                                    </div>
                                    )
                        }
                    </div>
                </div>
            </div>
            {/* <div className='bg-black text-white'>
                <h3 className='text-center titles'>Merit Certificates</h3>
                <div className='container my-5'>
                    <div className='row justify-content-around'>
                        {
                            meritCertificate.map(
                                        (ele) =>  <div className='col-10 col-md-5 col-lg-5 text-center eachMeritCertificate '>
                                                            <img src={ele.icon} width="100%"/>
                                                            <p className='mt-4 mb-0'>{ele.name}</p>
                                                    </div>
                                    )
                        }
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Certificates;