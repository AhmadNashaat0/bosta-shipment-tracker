export function useSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);

  const getSearchParam = (name: string) => {
    return searchParams.get(name);
  };

  const setSearchParam = (name: string, value: string) => {
    if (value && value !== "") {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    window.history.pushState(null, "", "?" + searchParams.toString());
  };

  return { getSearchParam, setSearchParam };
}
