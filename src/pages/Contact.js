import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.holder}>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div className={classes.flex_display}>
          <div className={classes.block_display_name}>
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name="name"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>

          <div className={classes.block_display_name}>
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="name"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@email.com"
          className={classes.block_display}
        />

        <label htmlFor="message">Message</label>
        <textarea
          type="textarea"
          name="message"
          maxLength="400"
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible "
          className={`${classes.block_display} ${classes.pad}`}
          // onClick={onFocusHandler}
        />

        <div>
          <input type="checkbox" name="agreement" className={classes.check} />
          <label htmlFor="agreement">
            You agree to providing your data to Ahmad who may contact you.
          </label>
        </div>

        <br></br>
        <button className={classes.btn} id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
