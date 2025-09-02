'use server';

export async function searchBooks(prevState, queryData) {
  console.log(prevState, queryData);
  const query = queryData.get('q');

  const actionURL = new URL('https://openlibrary.org/search.json');
  actionURL.searchParams.set('q', query);
  const request = new Request(actionURL, {
    method: 'GET',
  });

  const response = await fetch(request);
  const json = await response.json();
  return json;
}
