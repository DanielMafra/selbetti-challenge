import './styles.scss';

type ErrorAlertProps = {
  error: string;
}

export function ErrorAlert ({ error }: ErrorAlertProps) {
  return (
    <div className="error-alert">
      {error}
    </div>
  )
}