import type { SearchResults, SearchResult } from '../../contexts/Search';
import { Book } from '../Book';

interface BooksProp {
  searchResult: SearchResults;
}

export const Books = ({ searchResult }: BooksProp) => {
  if (searchResult === null) return null;
  if (Array.isArray(searchResult) && searchResult.length === 0)
    return <p>Nothing found</p>;
  return (
    <ul className="books">
      {searchResult.map(({ title, key }: SearchResult) => (
        <li key={key}>
          <Book title={title} />
        </li>
      ))}
    </ul>
  );
};
