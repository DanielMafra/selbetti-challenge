import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { Benefits } from "../../components/Benefits";
import { FinallyHeader } from "../../components/FinallyHeader";
import './styles.scss';

export function Completed () {
  const navigate = useNavigate();
  const { state } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    }
  }, []);

  return (
    <>
      <FinallyHeader />
      <div className="form-area container">
        <div className="finally-area d-flex flex-column align-items-center justify-content-center gap-4">
          <img src="images/enviado.svg" alt="Ilustração de um aviãozinho de papel sendo jogado" />
          <p className="text-center fs-4 fw-bold">
            Adeus papel!<br />Seu portal está pronto.
          </p>
        </div>
        <div className="plan-area">
          <p className="text-center fs-6">
            Seu plano gratuito garante acesso vitalício a
          </p>
          <Benefits />
          <button className="portal-btn">
            Ir para o meu portal
          </button>
        </div>
      </div>
    </>
  )
}