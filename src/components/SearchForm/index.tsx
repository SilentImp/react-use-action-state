import { SearchForm as SearchFormDumb } from './SearchForm';
import { useSearchContext, type SearchResults } from '../../contexts/Search';
import { useActionState } from 'react';

const API_URL = 'https://openlibrary.org/search.json';

export const SearchForm = () => {
  console.log('form wrapper rerendered');
  const { setSearchResult } = useSearchContext();

  const submitHandler = async (_: { success: boolean; payload: SearchResults } | null, queryData: FormData) => {
    try {
      const query = queryData.get('q');
      if (typeof query !== 'string') throw new Error('keyword missing');
      const url = new URL(API_URL);
      url.searchParams.set('q', query);
      const request = new Request(url, { method: 'GET' });
      const response = await fetch(request);
      const json = await response.json();
      setSearchResult(json.docs);
      return { success: true, payload: json };
    } catch {
      return { success: false, payload: null };
    }
  };
  const [, formAction] = useActionState(submitHandler, null);

  return <SearchFormDumb action={formAction} />;
};
