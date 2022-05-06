import { useForm, FormActions } from '../../contexts/FormContext';
import { Errors } from '../../pages/FormStep1';
import './styles.scss';

type FirstStepProps = {
  handleNextStep: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (type: FormActions, payload: string | number) => void;
  errors: Errors;
}

export function FirstStep ({ handleNextStep, handleInputChange, errors }: FirstStepProps) {
  const { state } = useForm();

  return (
    <form
      className="form-principal container"
      onSubmit={handleNextStep}
    >
      <div className="mb-3">
        <label
          htmlFor="name"
          className="form-label"
        >
          Nome
        </label>
        <input
          type="text"
          className={`form-control ${errors.name && 'is-invalid'}`}
          id="name"
          value={state.name}
          onChange={(e) => handleInputChange(FormActions.setName, e.target.value)}
        />
        <div className="invalid-feedback">
          Por favor, digite seu nome
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label"
        >
          Email
        </label>
        <input
          type="email"
          className={`form-control ${errors.email && 'is-invalid'}`}
          id="email"
          value={state.email}
          onChange={(e) => handleInputChange(FormActions.setEmail, e.target.value)}
        />
        <div className="invalid-feedback">
          Digite um email válido
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="password"
          className="form-label"
        >
          Senha
        </label>
        <input
          type="password"
          className={`form-control ${errors.password && 'is-invalid'}`}
          id="password"
          value={state.password}
          onChange={(e) => handleInputChange(FormActions.setPassword, e.target.value)}
        />
        <div className="invalid-feedback">
          Digite uma senha forte
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="domain"
          className="domain-label form-label"
        >
          Domínio
        </label>
        <div className="input-group">
          <input
            type="text"
            className={`form-control ${errors.domain && 'is-invalid'}`}
            id="domain"
            value={state.domain}
            onChange={(e) => handleInputChange(FormActions.setDomain, e.target.value)}
          />
          <span className="input-group-text">
            .selbetti.com.br
          </span>
          <div className="invalid-feedback">
            Digite um nome para o domínio
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="tel-country"
          className="form-label"
        >
          Telefone
        </label>
        <div className="tel-group input-group">
          <input
            type="text"
            className={`small-input form-control ${errors.telCountry && 'is-invalid'}`}
            id="tel-country"
            value={state.telCountry > 0 ? state.telCountry : ''}
            onChange={(e) => handleInputChange(FormActions.setTelCountry, Number(e.target.value))}
            maxLength={3}
          />
          <input
            type="text"
            className={`small-input form-control ${errors.telState && 'is-invalid'}`}
            id="tel-state"
            value={state.telState > 0 ? state.telState : ''}
            onChange={(e) => handleInputChange(FormActions.setTelState, Number(e.target.value))}
            maxLength={3}
          />
          <input
            type="text"
            className={`form-control ${errors.tel && 'is-invalid'}`}
            id="tel-number"
            value={state.tel > 0 ? state.tel : ''}
            onChange={(e) => handleInputChange(FormActions.setTel, Number(e.target.value))}
            minLength={8}
            maxLength={9}
          />
          <div className="invalid-feedback">
            Digite um telefone válido
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value=""
            id="newsletter"
            required
          />
          <label
            htmlFor="newsletter"
            className="checkbox-description form-check-label"
          >
            Concordo em receber novidades sobre a Selbetti via email
          </label>
        </div>
        <button type="submit">
          Continuar
        </button>
      </div>
    </form>
  )
}