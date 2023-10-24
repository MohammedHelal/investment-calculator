import { useState } from "react";
import InputGroup from "./InputGroup";
import styles from "./Form.module.css";

function Form({ fillTableData, resetTable }) {
  const [formDetails, setFormDetails] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const [formError, setFormError] = useState({
    "current-savings-error": false,
    "yearly-contribution-error": false,
    "expected-return-error": false,
    "duration-error": false,
  });

  function inputDetails(e) {
    let id = e.target.id;

    switch (id) {
      case "current-savings":
        setFormDetails((prevState) => {
          return { ...prevState, "current-savings": e.target.value };
        });
        setFormError((prevState) => {
          return { ...prevState, "current-savings-error": false };
        });
        break;
      case "yearly-contribution":
        setFormDetails((prevState) => {
          return { ...prevState, "yearly-contribution": e.target.value };
        });
        setFormError((prevState) => {
          return { ...prevState, "yearly-contribution-error": false };
        });
        break;
      case "expected-return":
        setFormDetails((prevState) => {
          return { ...prevState, "expected-return": e.target.value };
        });
        setFormError((prevState) => {
          return { ...prevState, "expected-return-error": false };
        });
        break;
      case "duration":
        setFormDetails((prevState) => {
          return { ...prevState, duration: e.target.value };
        });
        setFormError((prevState) => {
          return { ...prevState, "duration-error": false };
        });
        break;
      default:
        break;
    }
  }

  function submitForm(e) {
    e.preventDefault();

    if (
      formDetails["current-savings"].trim().length === 0 ||
      formDetails["yearly-contribution"].trim().length === 0 ||
      formDetails["expected-return"].trim().length === 0 ||
      formDetails["duration"].trim().length === 0
    ) {
      setFormError((prevState) => {
        return {
          ...prevState,
          "current-savings-error":
            formDetails["current-savings"].trim().length === 0,
          "yearly-contribution-error":
            formDetails["yearly-contribution"].trim().length === 0,
          "expected-return-error":
            formDetails["expected-return"].trim().length === 0,
          "duration-error": formDetails["duration"].trim().length === 0,
        };
      });

      return;
    }

    let data = calculateHandler(formDetails);
    console.log(data);

    fillTableData(data);
    return;
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitForm}
      onReset={() => resetTable()}
    >
      <InputGroup
        id1={"current-savings"}
        id2={"yearly-contribution"}
        text1={"Current Savings ($)"}
        text2={"Yearly Savings ($)"}
        inputDetails={inputDetails}
        formError={formError}
      />
      <InputGroup
        id1={"expected-return"}
        id2={"duration"}
        text1={"Expected Interest (%, per year)"}
        text2={"Investment Duration (years)"}
        inputDetails={inputDetails}
        formError={formError}
      />
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;

const calculateHandler = (userInput) => {
  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  const yearlyData = []; // per-year results

  let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput["expected-return"] / 100;
  const duration = +userInput["duration"];
  let accumulatedInterest = 0;
  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    accumulatedInterest += yearlyInterest;
    currentSavings += yearlyInterest + yearlyContribution;
    const yearlyContributionNow = currentSavings - accumulatedInterest;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest.toFixed(2),
      accumulatedInterest: accumulatedInterest.toFixed(2),
      savingsEndOfYear: currentSavings.toFixed(2),
      yearlyContribution: yearlyContributionNow.toFixed(2),
    });
  }

  return yearlyData;
  // do something with yearlyData ...
};
