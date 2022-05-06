import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { FirstStep } from '../../components/FirstStep';
import { FormHeader } from '../../components/FormHeader';
import { Progressbar } from '../../components/Progressbar';

export type Errors = {
  name?: boolean;
  email?: boolean;
  password?: boolean;
  domain?: boolean;
  telCountry?: boolean;
  telState?: boolean;
  tel?: boolean;
}

export function FormStep1 () {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleInputChange = (type: FormActions, payload: string | number) => {
    dispatch({
      type,
      payload
    });
  }

  const validateInputs = () => {
    let errors = {
      name: false,
      email: false,
      password: false,
      domain: false,
      telCountry: false,
      telState: false,
      tel: false,
    }

    let isValid = true;

    if (state.name.length <= 0) {
      errors.name = true;
      isValid = false;
    }

    if (state.email.length <= 0) {
      errors.email = true;
      isValid = false;
    }

    if (state.password.length <= 0) {
      errors.password = true;
      isValid = false;
    }

    if (state.domain.length <= 0) {
      errors.domain = true;
      isValid = false;
    }

    if (state.telCountry === 0) {
      errors.telCountry = true;
      isValid = false;
    }

    if (state.telState === 0) {
      errors.telState = true;
      isValid = false;
    }

    if (state.tel === 0) {
      errors.tel = true;
      isValid = false;
    }

    dispatch({
      type: FormActions.setInputsErrors,
      payload: { ...errors }
    })

    return isValid;
  }

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: FormActions.setInputsErrors,
      payload: {}
    })

    let isValid = validateInputs();

    if (isValid) {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
      navigate('/solutions');
    }
  }

  return (
    <>
      <FormHeader />
      <div className="form-area container">
        <Progressbar currentStep={state.currentStep} />
        <FirstStep handleNextStep={handleNextStep} handleInputChange={handleInputChange} errors={state.inputsErrors} />
      </div>
    </>
  )
}
