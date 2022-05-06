import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { FinallyHeader } from "../../components/FinallyHeader";
import { Progressbar } from "../../components/Progressbar";
import './styles.scss';

export function Loading () {
  const navigate = useNavigate();
  const { state } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    }
  }, []);

  useLayoutEffect(() => {
    if (state.name !== '' && (state.solutions.length > 0 || state.customSolution !== '')) {
      setTimeout(() => {
        navigate('/completed');
      }, 2000);
    }
  }, []);

  return (
    <>
      <FinallyHeader />
      <div className="form-area container">
        <Progressbar currentStep={3} />
        <div className="load-area d-flex flex-column align-items-center justify-content-center gap-4">
          <div className="spinner"></div>
          <p className="text-center fs-4 fw-bold">
            Aguarde enquanto<br />preparamos o seu portal
          </p>
        </div>
      </div>
    </>
  )
}