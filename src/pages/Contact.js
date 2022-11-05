import { useState } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredCheckbox, setEnteredCheckbox] = useState(false);
  const [enteredForm, setEnteredForm] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [mailValid, setMailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [checkBoxValid, setcheckBoxValid] = useState(false);

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    setFirstNameValid((prevValue) =>
      enteredFirstName.trim().length > 0 ? true : false
    );
  };

  // const firstNameValid = enteredFirstName.trim().length > 0 ? true : false;

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
    setLastNameValid(enteredLastName.trim().length > 0 ? true : false);
  };

  // const lastNameValid = enteredLastName.trim().length > 0 ? true : false;

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
    setMailValid(
      enteredMail.trim().length > 0 && enteredMail.includes("@") ? true : false
    );
  };

  // const mailValid =
  //   enteredMail.trim().length > 0 && enteredMail.includes("@") ? true : false;

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
    setMessageValid(enteredMessage.trim().length > 0 ? true : false);
  };

  // const messageValid = enteredMessage.trim().length > 0 ? true : false;

  const checkBoxChangeHandler = (event) => {
    setEnteredCheckbox((prevValue) => !prevValue);
    setcheckBoxValid((prevValue) => enteredCheckbox);
  };

  // const checkBoxValid = enteredCheckbox ? true : false;

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      firstNameValid &&
      lastNameValid &&
      mailValid &&
      messageValid &&
      checkBoxValid
    ) {
      const userData = {
        first_name: enteredFirstName,
        last_name: enteredLastName,
        email: enteredMail,
        message: enteredMessage,
      };

      console.log(userData.first_name);

      setEnteredFirstName("");
      setEnteredLastName("");
      setEnteredMail("");
      setEnteredMessage("");
      setEnteredCheckbox(false);
    }
  };

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
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
            />
          </div>
          {!firstNameValid && <p>This is error</p>}
          <div className={classes.block_display_name}>
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="name"
              id="last_name"
              placeholder="Enter your last name"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
            />
          </div>
          {!lastNameValid && <p>This is error</p>}
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@email.com"
          value={enteredMail}
          onChange={mailChangeHandler}
          className={classes.block_display}
        />
        {!mailValid && <p>This is error</p>}
        <label htmlFor="message">Message</label>
        <textarea
          type="textarea"
          name="message"
          maxLength="400"
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible "
          value={enteredMessage}
          onChange={messageChangeHandler}
          className={`${classes.block_display} ${classes.pad}`}
          // onClick={onFocusHandler}
        />
        {!messageValid && <p>This is error</p>}
        <div>
          <input
            type="checkbox"
            name="agreement"
            onClick={checkBoxChangeHandler}
            value={enteredCheckbox}
            className={classes.check}
          />
          <label htmlFor="agreement">
            You agree to providing your data to Ahmad who may contact you.
          </label>
          {!checkBoxValid && <p>This is error</p>}
        </div>

        <br></br>
        <button
          type="button"
          className={classes.btn}
          id="btn__submit"
          onSubmit={submitHandler}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
