import './Input.scss';
import { cn } from '../../utils/utils.ts';
import type { InputProps } from '../../types/Input.ts';
import { getIn, useFormikContext } from 'formik';
import UnderTextInput from './UnderTextInput.tsx';

function Input({
  type = 'text',
  placeholder,
  helpText,
  value,
  onChange,
  name = '',
  error = [],
}: InputProps) {
  const { errors, touched } = useFormikContext();

  // Отримуємо помилки
  const errorMessage = getIn(errors, name);
  const isTouched = getIn(touched, name);

  return (
    // Контейнер поля. Якщо є помилки з беку або з formik, то додаємо клас error
    <div className={cn('input', error?.length > 0 || (errorMessage && isTouched) ? 'error' : '')}>
      {/* Плаваючий placeholder */}
      {placeholder ? (
        <label htmlFor={name} className={cn('input__placeholder', !!value ? 'filled' : '')}>
          {placeholder}
        </label>
      ) : null}

      <input name={name} value={value} onChange={onChange} className="input__field" type={type} />

      {/* Помилки та допоміжний текст */}
      <UnderTextInput
        helpText={helpText}
        error={error}
        errorMessage={errorMessage}
        isTouched={isTouched}
      />
    </div>
  );
}

export default Input;
