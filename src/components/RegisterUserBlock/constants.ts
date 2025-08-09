import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),

  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address')
    .required('Email is required'),

  phone: Yup.string()
    .trim()
    .matches(/^\+380\d{9}$/, 'Phone must be in format +380XXXXXXXXX')
    .required('Phone is required'),

  position_id: Yup.string().required('Position is required'),

  photo: Yup.mixed<File>()
    .test('file', 'Photo is required', value => (value instanceof File ? !!value?.name : false))
    .test('fileSize', 'File is too large (max 5MB)', value =>
      value instanceof File ? value.size <= 5 * 1024 * 1024 : false,
    )
    .test('fileFormat', 'Unsupported file format (jpg or jpeg only)', value =>
      value instanceof File ? ['image/jpeg', 'image/jpg'].includes(value.type) : false,
    ),
});
