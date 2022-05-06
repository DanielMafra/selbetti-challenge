import { createContext, useContext, useReducer, ReactNode } from "react";
import { Errors } from '../pages/FormStep1';

type State = {
  currentStep: number;
  name: string;
  email: string;
  password: string;
  domain: string;
  telCountry: number;
  telState: number;
  tel: number;
  solutions: string[];
  customSolution: string;
  inputsErrors: Errors,
  solutionsError: boolean;
}

type Action = {
  type: FormActions;
  payload: any;
}

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

type FormProviderProps = {
  children: ReactNode;
}

const initialData: State = {
  currentStep: 1,
  name: '',
  email: '',
  password: '',
  domain: '',
  telCountry: 0,
  telState: 0,
  tel: 0,
  solutions: [],
  customSolution: '',
  inputsErrors: {},
  solutionsError: false
}

const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
  setCurrentStep,
  setName,
  setEmail,
  setPassword,
  setDomain,
  setTelCountry,
  setTelState,
  setTel,
  setSolutions,
  setCustomSolution,
  setInputsErrors,
  setSolutionsError
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setPassword:
      return { ...state, password: action.payload };
    case FormActions.setDomain:
      return { ...state, domain: action.payload };
    case FormActions.setTelCountry:
      return { ...state, telCountry: action.payload };
    case FormActions.setTelState:
      return { ...state, telState: action.payload };
    case FormActions.setTel:
      return { ...state, tel: action.payload };
    case FormActions.setSolutions:
      return { ...state, solutions: action.payload };
    case FormActions.setInputsErrors:
      return { ...state, inputsErrors: action.payload };
    case FormActions.setCustomSolution:
      return { ...state, customSolution: action.payload };
    case FormActions.setSolutionsError:
      return { ...state, solutionsError: action.payload };
    default:
      return state;
  }
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm needs to be inside the FormProvider');
  }
  return context;
}
