import './RegisterUserBlock.scss';
import { Form, Formik } from 'formik';
import Input from '../Input/Input.tsx';
import { Container } from '../Container/Container.tsx';
import InputFile from '../Input/InputFile.tsx';
import { useGetPositions } from '../../hooks/useGetPositions.ts';
import InputRadio from '../Input/InputRadio.tsx';
import Button from '../Button/Button.tsx';
import { useAddUser } from '../../hooks/useAddUser.ts';
import Loading from '../Loading/Loading.tsx';
import AfterSuccess from './AfterSuccess.tsx';
import { validationSchema } from './constants.ts';
import { hasEmptyKeys } from '../../utils/utils.ts';

function RegisterUserBlock() {
  const { data: positions } = useGetPositions();
  const { data, isPending, mutate } = useAddUser();

  // Відправляємо дані на бек через mutate з хуку useAddUser
  function handleSubmit(values: any) {
    const formData = new FormData();

    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    mutate(formData);
  }

  return (
    <Container id="signup">
      {/* Якщо успішна відправка, то показуємо повідомлення */}
      {data?.success ? (
        <AfterSuccess />
      ) : (
        <section className="register-user">
          <h2>Working with POST request</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              position_id: positions?.positions?.[0]?.id,
              photo: File,
            }}
            onSubmit={handleSubmit}
            enableReinitialize={true}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, setFieldValue }) => (
              <Form className="register-user__form">
                <div className="register-user__inputs">
                  <Input
                    error={data?.fails?.name}
                    name="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <Input
                    error={data?.fails?.email}
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <Input
                    error={data?.fails?.phone}
                    name="phone"
                    placeholder="Phone"
                    value={values.phone}
                    helpText={'+38 (XXX) XXX - XX - XX'}
                    onChange={handleChange}
                  />
                </div>

                <div className="register-user__positions-wrap">
                  <span>Select your position</span>
                  <div className="register-user__positions">
                    {/* Виводимо позиції, які отримали з беку */}
                    {positions?.positions?.map((position: { name: string; id: string }) => (
                      <InputRadio
                        key={position?.id}
                        id={position?.id}
                        value={values.position_id}
                        label={position?.name}
                        onChange={() => setFieldValue('position_id', position?.id)}
                        name="position_id"
                      />
                    ))}
                  </div>
                </div>
                <InputFile error={data?.fails?.photo} name="photo" buttonLabel="Upload" />
                {isPending ? (
                  <Loading />
                ) : (
                  <Button
                    disabled={hasEmptyKeys(values)}
                    className="register-user__button"
                    type="submit"
                  >
                    Sign up
                  </Button>
                )}
              </Form>
            )}
          </Formik>
        </section>
      )}
    </Container>
  );
}

export default RegisterUserBlock;
