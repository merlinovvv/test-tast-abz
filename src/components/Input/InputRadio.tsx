import type { InputRadioProps } from '../../types/Input.ts';

function InputRadio({ label, name, value, onChange, id }: InputRadioProps) {
  return (
    <label className="input-radio" htmlFor={id}>
      <input id={id} onChange={onChange} checked={value === id} name={name} type="radio" />
      {label}
    </label>
  );
}

export default InputRadio;
