import React, {useEffect, useState} from "react";
import styles from "./ContainerForm.module.scss";
import {sendForm} from "../../utils/api";
import ReCAPTCHA from "react-google-recaptcha";

let initialState = {
  fornamn: "",
  efternamn: "",
  email: "",
  personnummer: "",
  telefonnummer: "",
  stad: "",
  gatuAdress: "",
  postnummer: "",
  errors: {
    fornamn: false,
    efternamn: false,
    email: false,
    personnummer: false,
    telefonnummer: false,
    stad: false,
    gatuAdress: false,
    postnummer: false,
  },
  thereIsOneOrMoreError: false,
  captchaValue: null,
};

export function ContainerForm({container}) {
  const [state, setState] = useState(initialState);

  function onChange(value) {
    console.log("Captcha value:", value);
    setState({
      ...state,
      captchaValue: value,
    });
  }

  const handleRegex = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let error = false;

    let regex = "";

    switch (target.name) {
      case "fornamn":
        regex = /^[a-öA-Ö]{2,21}$/;
        break;
      case "efternamn":
        regex = /^[a-öA-Ö]{2,21}$/;
        break;
      case "email":
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case "personnummer":
        regex = /^(19|20)?[0-9]{6}[- ]?[0-9]{4}$/;
        break;
      case "telefonnummer":
        regex = /^[\s\d]+$/;
        break;
      case "stad":
        regex = /^[a-öA-Ö]{2,21}$/;
        break;
      case "gatuAdress":
        regex = /^.{5,50}$/;
        break;
      case "postnummer":
        regex = /^\d{3} \d{2}$/;
        break;
    }

    regex.test(state[name]) ? (error = false) : (error = true);

    setState({
      ...state,
      [name]: value,
      errors: {
        ...state.errors,
        [name]: error,
      },
    });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({...state, thereIsOneOrMoreError: false});

    const isThereErros = Object.values(state.errors);
    console.log(state);

    isThereErros.map((inputError) => {
      if (inputError === true) {
        console.log("input error");
        setState({...state, thereIsOneOrMoreError: true});

        return;
      }
    });

    if (
      state.thereIsOneOrMoreError === false &&
      state.fornamn &&
      state.efternamn &&
      state.email &&
      state.personnummer &&
      state.personnummer &&
      state.telefonnummer &&
      state.stad &&
      state.gatuAdress &&
      state.postnummer
    ) {
      sendForm({
        container: {
          _id: container._id,
          location: container.location,
          number: container.containerNumber,
          type: container.type,
          m2: container.m2,
          price: container.price,
        },
        customer: {
          fornamn: state.fornamn,
          efternamn: state.efternamn,
          email: state.email,
          personnummer: state.personnummer,
          telefonnummer: state.telefonnummer,
          stad: state.stad,
          gatuAdress: state.gatuAdress,
          postnummer: state.postnummer,
        },
      });
    } else {
      const untouchedField = Object.entries(state);

      const newErrors = {};

      untouchedField.forEach((element) => {
        if (element[1] === "") {
          let name = element[0];

          newErrors[name] = true;
        }
      });

      setState({
        ...state,
        errors: {
          ...state.errors,
          ...newErrors,
        },
      });
    }
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="fornamn">
                  Förnamn
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.fornamn}
                  className={state.errors.fornamn ? styles.inputFail : styles.input}
                  type="text"
                  name="fornamn"
                  id="fornamn"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="efternamn">
                  Efternamn
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.efternamn}
                  className={state.errors.efternamn ? styles.inputFail : styles.input}
                  type="text"
                  name="efternamn"
                  id="efternamn"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.email}
                  className={state.errors.email ? styles.inputFail : styles.input}
                  type="email"
                  name="email"
                  id="email"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="personnummer">
                  Personnummer
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.personnummer}
                  className={state.errors.personnummer ? styles.inputFail : styles.input}
                  name="personnummer"
                  id="personnummer"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="telefonnummer">
                  Telefonnummer
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.telefonnummer}
                  className={state.errors.telefonnummer ? styles.inputFail : styles.input}
                  name="telefonnummer"
                  id="telefonnummer"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="stad">
                  Stad
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.stad}
                  className={state.errors.stad ? styles.inputFail : styles.input}
                  placeholder=""
                  type="text"
                  name="stad"
                  id="stad"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="gatuadress">
                  Gatuadress
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.gatuAdress}
                  className={state.errors.gatuAdress ? styles.inputFail : styles.input}
                  type="text"
                  name="gatuAdress"
                  id="gatuadress"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="postnummer">
                  Postnummer
                </label>
                <input
                  onChange={handleInputChange}
                  onBlur={handleRegex}
                  value={state.postnummer}
                  className={state.errors.postnummer ? styles.inputFail : styles.input}
                  name="postnummer"
                  id="postnummer"
                ></input>
              </div>

              <div className={styles.inputWrapper}>
                <ReCAPTCHA sitekey="6Lfwob8ZAAAAAH2W6B14sCeQxODHBpw8eo-2cCMa" onChange={onChange} />
              </div>
              <div className={styles.inputWrapper}>
                <input className={styles.submit} type="submit" value="Skicka in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
