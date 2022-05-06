import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { SecondStep } from '../../components/SecondStep';
import { FormHeader } from '../../components/FormHeader';
import { Progressbar } from '../../components/Progressbar';
import { ErrorAlert } from '../../components/ErrorAlert';

export function FormStep2 () {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    }
  }, []);

  const handleInputChange = (type: FormActions, payload: string | number) => {
    dispatch({
      type,
      payload
    });
  }

  const handlePreviousStep = () => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
    navigate('/');
  }

  const handleCreateAccount = () => {
    if (state.solutions.length > 0 || state.customSolution !== '') {
      navigate('/creating');
    } else {
      dispatch({
        type: FormActions.setSolutionsError,
        payload: true
      });
      setTimeout(() => {
        dispatch({
          type: FormActions.setSolutionsError,
          payload: false,
        })
      }, 5000);
    }
  }

  return (
    <>
      <FormHeader />
      <div className="form-area container">
        <Progressbar currentStep={state.currentStep} />
        <SecondStep
          handlePreviousStep={handlePreviousStep}
          handleCreateAccount={handleCreateAccount}
          handleInputChange={handleInputChange}
        />
      </div>
      {state.solutionsError && <ErrorAlert error="Selecione pelo menos uma opção" />}
    </>
  )
}
