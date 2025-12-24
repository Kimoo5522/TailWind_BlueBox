import "./FormStyles.css";
import { useState } from "react";
import Modal from "./Modal";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleSubmitBtn(event) {
    event.preventDefault();
    const { age, phoneNumber } = loanInputs;
    setErrorMessage(null);
    if (age < 18 || age > 100) {
      setErrorMessage("The Age is Not Allowed!");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("The Phone Number is Not Allowed!");
    }
    setShowMessage(true);
  }

  function handleClickDiv() {
    if (showMessage) {
      setShowMessage(false);
    }
  }

  const disabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  return (
    <div className="loanFormDiv" onClick={handleClickDiv}>
      <form className="formClass">
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label id="checkboxLabel">Are You an Employee?</label>
        <input
          type="checkbox"
          value={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary</label>
        <select
          id="selectId"
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>more than 2000$</option>
        </select>

        <button
          id="submitBtn"
          className={disabled ? "disabled" : ""}
          onClick={handleSubmitBtn}
          disabled={disabled}
        >
          Submit
        </button>
      </form>

      <Modal errorMess={errorMessage} showMess={showMessage} />
    </div>
  );
}
