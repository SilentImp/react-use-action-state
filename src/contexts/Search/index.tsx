import { useContext, createContext, useState, type ReactNode } from 'react';

export interface SearchResult {
  author_key: string[];
  author_name: string[];
  title: string;
  first_publish_year: number;
  language: string[];
  key: string;
}

export type SearchResults = SearchResult[] | null;

interface SearchContext {
  searchResult: SearchResults;
  setSearchResult:
    | React.Dispatch<React.SetStateAction<SearchResults>>
    | (() => void);
}

const defaultContext = {
  searchResult: null,
  setSearchResult: () => {},
};

const SearchContext = createContext<SearchContext>(defaultContext);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResult, setSearchResult] = useState<SearchResults>(null);

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
