import { SubmitButton } from '../SubmitButton';
import './SearchForm.css';

interface SearchFormProps {
  action: (formData: FormData) => void | Promise<void>;
}

export const SearchForm = ({ action }: SearchFormProps) => {
  return (
    <form action={action} method="GET">
      <label>
        Search for:
        <input
          className="search-form__input"
          type="search"
          required
          name="q"
          placeholder="Lord of the rings"
        />
      </label>
      <SubmitButton />
    </form>
  );
};
