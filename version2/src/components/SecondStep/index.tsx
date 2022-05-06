import { MouseEventHandler } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import './styles.scss';

type SecondStepProps = {
  handlePreviousStep: MouseEventHandler<HTMLButtonElement>;
  handleCreateAccount: MouseEventHandler<HTMLButtonElement>;
  handleInputChange: (type: FormActions, payload: string | number) => void;
}

export function SecondStep ({ handlePreviousStep, handleCreateAccount, handleInputChange }: SecondStepProps) {
  const { state, dispatch } = useForm();

  const handleAddSolution = (solution: string) => {
    let updatedSolutions = state.solutions;
    if (state.solutions.includes(solution)) {
      updatedSolutions = state.solutions.filter(item => item !== solution);
    } else {
      updatedSolutions.push(solution);
    }

    dispatch({
      type: FormActions.setSolutions,
      payload: updatedSolutions
    });
  }

  return (
    <>
      <p className="text-center">
        Selecione uma ou mais necessidades para pré-configurarmos o sistema para você
      </p>
      <div className="items container d-flex flex-column gap-3">
        <div className="row justify-content-center gap-3">
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Recursos Humanos') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Recursos Humanos')}
          >
            <img
              src="images/recursos-humanos.svg" alt="Figura representando 3 pessoas" />
            <span className="text-center">
              Recursos Humanos
            </span>
          </div>
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Financeiro') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Financeiro')}
          >
            <img src="images/financeiro.svg" alt="Gráfico financeiro crescente" />
            <span className="text-center">
              Financeiro
            </span>
          </div>
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Atendimento') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Atendimento')}
          >
            <img src="images/atendimento.svg" alt="Figura representando atendente" />
            <span className="text-center">
              Atendimento
            </span>
          </div>
        </div>
        <div className="row justify-content-center gap-3">
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Jurídico') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Jurídico')}
          >
            <img src="images/juridico.svg" alt="Martelo jurídico" />
            <span className="text-center">
              Jurídico
            </span>
          </div>
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Logistica') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Logistica')}
          >
            <img src="images/logistica.svg" alt="Caminhão" />
            <span className="text-center">
              Logística
            </span>
          </div>
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Educação') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Educação')}
          >
            <img src="images/educacao.svg" alt="Figura de caneta e papel com anotações" />
            <span className="text-center">
              Educação
            </span>
          </div>
        </div>
        <div className="row justify-content-center gap-3">
          <div
            className={`item col d-flex flex-column align-items-center justify-content-between ${state.solutions.includes('Saúde') ? 'active' : ''}`}
            role="button"
            onClick={() => handleAddSolution('Saúde')}
          >
            <img src="images/saude.svg" alt="Cruz representando área de saúde" />
            <span className="text-center">
              Saúde
            </span>
          </div>
          <div className={`item custom-input col d-flex flex-column align-items-center justify-content-between ${state.customSolution.length > 0 && 'active'}`}>
            <input
              className="form-control"
              type="text"
              placeholder="Digite um segmento"
              value={state.customSolution}
              onChange={(e) => handleInputChange(FormActions.setCustomSolution, e.target.value)}
            />
            <span className="text-center">
              Outro
            </span>
          </div>
        </div>
      </div>
      <div className="btns-area d-flex gap-3 mt-3 justify-content-center">
        <button className="btn-back" onClick={handlePreviousStep}>
          Voltar
        </button>
        <button className="btn-create-account" onClick={handleCreateAccount}>
          Criar minha conta
        </button>
      </div>
    </>
  )
}