// @ts-ignore
function UnderTextInput({ error, errorMessage, isTouched, helpText }) {
  return error?.length > 0 && Array.isArray(error) ? (
    error?.map((err, i) => (
      <span key={`${err}_${i}`} className="input__help-text">
        {err}
      </span>
    ))
  ) : errorMessage && isTouched ? (
    <span className="input__help-text">{errorMessage}</span>
  ) : (
    <span className="input__help-text">{helpText ?? ''}</span>
  );
}

export default UnderTextInput;
