import SUCCESS_IMG from '../../images/photos/success-image.png';

function AfterSuccess() {
  return (
    <div className="after-success">
      <h2>User successfully registered</h2>
      <img src={SUCCESS_IMG} alt="success" />
    </div>
  );
}

export default AfterSuccess;
