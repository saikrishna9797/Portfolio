// // import React from 'react'
// import './styles/ContactUs.css'
// import Contact from './images/contact.jpg';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// function ContactUs() {

//      const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log(form);
//     emailjs
//       .sendForm('service_qai46wl', 'template_31tqqvh', form.current, 'Y1lAR7WJoilJOhm0F')
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className='contactus'>

//       {/* <div className='row'>
//         <div className='col-sm-6 col-md-4 col-lg-3'>
//         <img alt='hihi' src={Contact}/>
//         </div>
//       </div> */}
//        <div className='giff'>
        
//         <img alt='hihi' src={Contact}/>
      
            
//        </div>

//       <div>
//       <form ref={form} onSubmit={sendEmail}>
//         <div class="form-content">  
            
//             <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email*"/>
//             <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
      
//         <div class="form-content">
//             <input type="text" class="form-control" id="purpose" aria-describedby="" placeholder="purpose*"/>

//         </div>

//         <div class="form-content">
//             <input type="text" class="form-control" id="description" aria-describedby="" placeholder="description*"/>

//         </div>       
        
        
//         <button type="submit" class="btn btn-primary">Submit</button>
//     </form>
//       </div>

    
//     </div>
//   )
// }

// export default ContactUs


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import contact from './images/contact/contact-illustration.gif';
import Contact from './images/contact.jpg';
import './styles/ContactUs.css';

function ContactUs() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    emailjs
      .sendForm('service_qai46wl', 'template_f6jc30s', form.current, 'xY2Eo6rlmGcM9jG21')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className='contactUsTop'></div>
    <div className="contact-container">
      <div className="contact-gif-container p-2">
        <img src={Contact} alt="no gif" className="contact-gif"  />
      </div>
      <div className="contact-form-container">
        <div className="mt-5 mx-3 pt-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <label htmlFor="mailid" className="form-label">Email</label>
            <input type="email" name="mailid" id="mailid" className="form-input" />
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name="subject" id="subject" className="form-input" />
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-textarea"
            />
            <input
              type="submit"
              value="Send"
              className="form-submit"
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;