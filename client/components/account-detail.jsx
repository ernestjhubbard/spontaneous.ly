import React from 'react';

function AccountDetail(props) {
  let textValue = props.value;
  const currentState = props.state.changeDetail;
  const updateCallback = props.changeCallback;
  const placeholderText = props.placeholder;
  const inputType = props.type;
  const validEmail = props.validEmail;
  const validPassword = props.validPassword;
  let inputClass = null;

  if (inputType !== 'password') {
    if (textValue.length < 3) {
      inputClass = 'mb-0 form-control is-invalid';
    } else {
      inputClass = 'mb-0 form-control';
    }
  } else {
    inputClass = 'mb-0 form-control';
  }

  if (inputType === 'email' && !validEmail) {
    inputClass = 'mb-0 form-control is-invalid';
  } else if (inputType === 'password' && !validPassword) {
    inputClass = 'mb-0 form-control is-invalid';
  }

  if (!currentState && inputType === 'password') {
    textValue = '••••••••••';
  }

  if (currentState) {
    return <input name={props.name}
      className={inputClass}
      placeholder={placeholderText}
      value={textValue}
      type={inputType}
      required={true}
      onChange={event => {
        updateCallback(event);
      }} />;
  }
  return <p className="mb-0 form-control border bg-light text-muted">{textValue}</p>;
}

export default AccountDetail;
