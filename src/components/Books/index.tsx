import { useSearchContext } from '../../contexts/Search';
import { Books as BooksDumb } from './Books';
import './Books.css';

export const Books = () => {
  const { searchResult } = useSearchContext();
  return <BooksDumb searchResult={searchResult} />;
};
