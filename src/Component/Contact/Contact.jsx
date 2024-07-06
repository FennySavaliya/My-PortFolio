import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.png'
import mail from '../../assets/mail.jpeg'
import location from '../../assets/location.jpeg'
import telephone from '../../assets/telephone.jpeg'

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "78b3d1f7-82dc-4a81-967f-3a98038227e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme} alt="" height={400}/>
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail} alt="" height={50}/><p>fennysavaliya@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={telephone} alt="" height={40}/><p>+91 8141169648</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="" height={50}/><p>Ahmedabad, India</p>
                </div>
            </div>
        </div>
        <form  onSubmit={onSubmit} className="contact-right">
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter Your Name' name='name'/>
            <label htmlFor=''>Your Email</label>
            <input type='email' placeholder='Enter Your Email' name='email'/>
            <label htmlFor=''>Write Your Message Here</label>
            <textarea name="message" rows='4    ' placeholder='Enter Your Message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
