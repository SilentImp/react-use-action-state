import { useFormStatus } from 'react-dom';
import { SubmitButton as SubmitButtonDumb} from './SubmitButton';

export const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  console.log({ pending, data, method, action });
  return <SubmitButtonDumb isPending={pending} />
}