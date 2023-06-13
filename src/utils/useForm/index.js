import {useState} from 'react';

const useForm = initValue => {
  const [form, setForm] = useState(initValue);
  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setForm(initValue);
      }
      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
