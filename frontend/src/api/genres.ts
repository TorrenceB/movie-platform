const getGenres = async () => {
  try {
    const request = new Request(`http://localhost:3000/genres`);
    const response = await fetch(request);

    if (response.ok) {
      const genres = await response.json();

      return genres;
    } else {
      console.error(`[HTTP Error] status: ${response.status}`);
    }
  } catch (error) {
    console.error(`There was an error retrieving movies`, error);
  }
};

export { getGenres }
