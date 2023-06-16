import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isEmptyFirstNameInput: false,
    isEmptyLastNameInput: false,
    isFormSubmit: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isEmptyFirstNameInput: true})
    } else {
      this.setState({isEmptyFirstNameInput: false})
    }
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isEmptyLastNameInput: true})
    } else {
      this.setState({isEmptyLastNameInput: false})
    }
  }

  onSubmitBtn = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmit: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({isEmptyFirstNameInput: true, isEmptyLastNameInput: true})
    } else if (firstName === '') {
      this.setState({isEmptyFirstNameInput: true})
    } else if (lastName === '') {
      this.setState({isEmptyLastNameInput: true})
    }
  }

  renderFirstNameInput = () => {
    const {firstName, isEmptyFirstNameInput} = this.state

    return (
      <div className="input-container">
        <label htmlFor="first-name" className="label-text">
          FIRST NAME
        </label>
        <input
          id="first-name"
          type="text"
          placeholder="First Name"
          className={`input-text ${
            isEmptyFirstNameInput && 'error-input-container'
          }`}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {isEmptyFirstNameInput && <p className="error-message">Required</p>}
      </div>
    )
  }

  renderLastNameInput = () => {
    const {
      lastName,

      isEmptyLastNameInput,
    } = this.state

    return (
      <div className="input-container">
        <label htmlFor="first-name" className="label-text">
          LAST NAME
        </label>
        <input
          id="first-name"
          type="text"
          placeholder="First Name"
          className={`input-text ${
            isEmptyLastNameInput && 'error-input-container'
          }`}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {isEmptyLastNameInput && <p className="error-message">Required</p>}
      </div>
    )
  }

  renderRegistrationForm = () => (
    <form className="form-container" onSubmit={this.onSubmitBtn}>
      {this.renderFirstNameInput()}
      {this.renderLastNameInput()}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  )

  onClickSuccessBtn = () => {
    this.setState(prevState => ({
      isFormSubmit: !prevState.isFormSubmit,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccessfulResponse = () => (
    <div className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-response-text">Submitted Successfully</p>
      <button
        type="submit"
        className="submit-button"
        onClick={this.onClickSuccessBtn}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmit} = this.state
    return (
      <div className="app-container">
        <h1 className="registration-heading">Registration</h1>
        {isFormSubmit
          ? this.renderSuccessfulResponse()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}
export default RegistrationForm
