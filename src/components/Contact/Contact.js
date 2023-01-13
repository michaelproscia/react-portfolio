import "./Contact.css";
import linkedin from "./linkedin.png";
import github from "./github.png";
import gmail from "./gmail.png";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-header">Say Hello</h2>
      <p className="contact-blurb">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ut
        blanditiis ipsam aliquid, saepe aperiam doloribus amet tenetur ex,
        explicabo dolorum ducimus animi! Reprehenderit, obcaecati porro unde
        cupiditate eos nemo?
      </p>
      <div className="contact-links">
        <a href="www.linkedin.com/in/michaelproscia" target="_blank">
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/michaelproscia" target="_blank">
          <img src={github} alt="github logo" />
        </a>
        <a href="mailto:macp612@gmail.com" target="_blank">
          <img src={gmail} alt="gmail logo" />
        </a>
      </div>
    </section>
  );
}
