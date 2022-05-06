import { useForm } from "../../contexts/FormContext";

export function FinallyHeader () {
  const { state } = useForm();

  return (
    <div className="top-area pt-5">
      <div className="header-info container pt-4 pb-4">
        <h1 className="fs-4 fw-bold d-flex flex-column text-center">
          {state?.name}
        </h1>
        <p className="description text-center">
          Bem-vindo a revolução em gerenciamento de documentos e impressões em nuvem
        </p>
      </div>
    </div>
  )
}