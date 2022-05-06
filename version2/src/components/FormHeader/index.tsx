import { Benefits } from '../Benefits';
import './styles.scss';

export function FormHeader () {
  return (
    <div className="top-area pt-5">
      <div className="header-info container pt-4 pb-4">
        <h1 className="fs-4 fw-bold d-flex flex-column text-center">
          Cadastre-se Gratuitamente
          <span className="fw-normal fs-5">
            e tenha um plano vitalício com
          </span>
        </h1>
        <Benefits />
      </div>
    </div>
  )
}