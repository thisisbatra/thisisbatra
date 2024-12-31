import React,{useRef} from 'react';
import style from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const onSubmitForm=(e)=>{
        e.preventDefault();
        // console.log(e);
        emailjs
      .sendForm('mailer_118', 'template_oi90x8e', form.current, {
        publicKey: '9WricC34Q0Cy3Hyd5',
      })
      .then(
        (result) => {
            console.log("Message sent successfully to yourself:", result.text);
        },
        (error) => {
            console.error("Failed to send the message:", error.text);
        }
      );
      e.target.reset();
    }
    return (
        <main className={style.main}>
            <section className={style.desc}>
                <h1>
                    Reach Out—Let's Build Something Great!
                </h1>
                <p>
                    Whether you’re here to discuss a project, share an opportunity, or just say hello, 
                    I’d love to hear from you! Your message is important,
                    and I’ll get back to you in no time.
                </p>
            </section>
            <form className={style.form} ref={form} onSubmit={onSubmitForm}>

                    <input type="email" name="userEmail" placeholder='your email' className={style.Input} />

                    <input type="text" name="userName" placeholder='your name' className={style.Input} />

                    <input type="text" name="subject" id="" placeholder='subject' className={style.Input} />

                    <textarea name="message" id="" placeholder='message' className={style.TextArea}></textarea>

                    <input type="submit" value="submit" className={style.submitBtn} />

            </form>
        </main>
    );
}

export default Contact;
