import Social from "./Social";
import styles from "../styles/Contact.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  //
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      email,
      message,
    };
    console.log(data);
  };
  const ConfirmationMessage = (
    <>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        {" "}
        Submit Another Response{" "}
      </button>
    </>
  );
  const ContactForm = (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__information}>
          <h1>Get in touch</h1>
          <p>
            You can follow along with my work, personal projects and occasional
            insights into my life by following any of the links below. In case,
            you would like to collaborate with me in any project or idea, please
            feel free to reach out to me through the contact section. I will be
            sure to get back to you.
          </p>
          <Social />

          <form
            className={styles.contact__form}
            method="POST"
            name="contact-form"
            action="contact/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
              className={`${styles.contact__form__inputs} ${styles.contact__form__fields}`}
              id="name"
              name="name"
              required
              placeholder="your name goes here. . ."
              onChange={(e) => setSubmitterName(e.target.value)}
              type="text"
            />
            <input
              className={`${styles.contact__form__inputs} ${styles.contact__form__fields}`}
              type="text"
              name="email"
              required
              placeholder="your email goes here. . ."
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea

  className={`${styles.contact__form__inputs} ${styles.contact__form__fields}`}
              name="message"
              required
              placeholder="your message goes here. . ."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className={styles.contact__form__inputs}
              type="submit"
              // onClick={(e) => {
              //   handleSubmit(e);
              // }}
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {formVisible ? ContactForm : ConfirmationMessage}
    </div>
  );
};

export default Contact;
