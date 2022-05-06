import './styles.scss';

type ProgressbarProps = {
  currentStep: number;
}

export function Progressbar ({ currentStep }: ProgressbarProps) {
  return (
    <ul className="progressbar d-flex">
      <li className={currentStep === 1 ? 'active' : (currentStep > 1 ? 'active passed' : '')}>Digite<br />seus dados</li>
      <li className={currentStep === 2 ? 'active' : (currentStep > 2 ? 'active passed' : '')}>Selecione suas<br />necessidades</li>
      <li className={currentStep === 3 ? 'active' : (currentStep > 3 ? 'active passed' : '')}>Finalizar<br />cadastro</li>
    </ul>
  )
}