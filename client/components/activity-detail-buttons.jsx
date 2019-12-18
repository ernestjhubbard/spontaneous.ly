import React from 'react';

function ActivityDetailButtons(props) {
  let buttons = null;

  if (!props.user) {
    buttons = (
      <>
        <SignInButton {...props} />
        <SignUpButton {...props} />
      </>
    );
  } else {
    if (props.isConfirmed && props.isUpcoming) {
      buttons = (
        <>
          <CancelButton {...props}
            points={props.points}
            changeModal={props.changeModal}
            transaction={props.transaction}/>
          <BackButton {...props} />
        </>
      );
    } else if (!props.isConfirmed) {
      buttons = (
        <>
          <ConfirmButton {...props}
            reserve={props.reserve}
            transaction={props.transaction} />
          <BackButton {...props} />
        </>
      );
    } else if (!props.isUpcoming) {
      buttons = (
        <>
          <BackToPastActivitiesButton {...props}/>
        </>
      );
    }
  }

  return (
    <div className="container-fluid button-container calc-button-50 p-3 fixed-bottom">
      {buttons}
    </div>
  );
}

export default ActivityDetailButtons;

function SignInButton(props) {
  return (
    <button
      className="spon-button rounded text-white mt-0"
      onClick={() => {
        props.history.push('/sign-in');
      }}>
      Sign In
    </button>
  );
}

function SignUpButton(props) {
  return (
    <button
      className="spon-button-alt rounded mt-0"
      onClick={() => {
        props.history.push('/create-an-account');
      }}>
      Sign Up
    </button>
  );
}

function ConfirmButton(props) {
  return (
    <button
      className="spon-button rounded text-white mt-0"
      onClick={() => {
        props.reserve({ activityId: props.activityId });
        props.history.push(`/confirmed?activityId=${props.activityId}`);
        props.transaction({ transactionType: 'reservation', activityId: props.activityId });
      }}>
      Confirm
    </button>
  );
}

function CancelButton(props) {
  if (props.points < 50) {
    return (
      <button
        className="spon-link-cancel rounded mt-0"
        onClick={() => {
          props.changeModal();
        }}>
        Cancel
      </button>
    );
  } else {
    return (
      <button
        className="spon-link-cancel rounded mt-0"
        onClick={() => {
          props.changeModal();
          props.transaction({ transactionType: 'cancellation', activityId: props.activityId });
        }}>
      Cancel
      </button>
    );
  }
}

function BackButton(props) {
  return (
    <button
      className="spon-button-alt rounded mt-0"
      onClick={() => props.history.goBack()}>
      Back
    </button>
  );
}

function BackToPastActivitiesButton(props) {
  return (
    <div className="container-fluid button-container p-3 fixed-bottom">
      <button
        className="spon-button-alt rounded w-100 mt-0 mx-auto"
        onClick={() => props.history.goBack()}>
        Back
      </button>
    </div>
  );
}
