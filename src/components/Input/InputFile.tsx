import { cn } from '../../utils/utils.ts';
import { type ChangeEvent, useRef, useState } from 'react';
import { getIn, useFormikContext } from 'formik';
import type { InputFileProps } from '../../types/Input.ts';
import UnderTextInput from './UnderTextInput.tsx';

function InputFile({
  helpText,
  name = '',
  error = [],
  accept = 'image/jpeg',
  buttonLabel = 'Upload',
  placeholder = 'Upload your photo',
}: InputFileProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [label, setLabel] = useState('');
  const { setFieldValue, errors, touched } = useFormikContext();

  const errorMessage = getIn(errors, name);
  const isTouched = getIn(touched, name);

  // імітуємо клік по input[type='file']
  function handleClickButton() {
    inputFileRef.current?.click();
  }

  // При виборі файлу, додаємо його в спільний values
  function handleSelectFile(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files && e?.target?.files?.length > 0) {
      setLabel(e.target.files[0]?.name);

      if (typeof name === 'string') {
        setFieldValue(name, e.target.files[0]);
      }
    } else {
      setLabel('');
      inputFileRef.current && (inputFileRef.current.value = '');
    }
  }

  return (
    <div className={cn('input', error?.length > 0 || (errorMessage && isTouched) ? 'error' : '')}>
      <div className="input__file">
        <button
          aria-label="Upload image"
          type="button"
          onClick={handleClickButton}
          className="input__button"
        >
          {buttonLabel}
        </button>
        <div className={cn('input__field', label ? 'filled' : '')}>{label || placeholder}</div>
        <input
          ref={inputFileRef}
          style={{ display: 'none' }}
          name={name}
          onChange={handleSelectFile}
          type="file"
          accept={accept}
          multiple={false}
        />
      </div>

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

export default InputFile;
