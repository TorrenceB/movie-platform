const getFilters = async () => {
  try {
    const options = {
      headers: {
        method: "GET",
      },
    };
    const request = new Request(`http://localhost:3000/filters`, options);
    const response = await fetch(request);

    if (response.ok) {
      const filters = await response.json();

      return filters;
    } else {
      console.error(`[HTTP Error] status: ${response.status}`);
    }
  } catch (error) {
    console.error(`There was an error retrieving filters`, error);
  }
};

export { getFilters };
