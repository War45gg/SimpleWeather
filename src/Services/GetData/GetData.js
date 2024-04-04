export default (apiUrl, fetchImageSetings) => {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const filterIndex = [0, 8, 16, 24];
        data.list = data.list.filter((item, index) =>
          filterIndex.includes(index)
        );
        const date = new Date();
        data.list.forEach((item, index) => {
          item.id = index;
          item.day = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + index
          ).toLocaleString("en-us", { weekday: "long" });
          item.geo = `${data.city.name}, ${data.city.country}`;
          item.image = getImage(fetchImageSetings, item).then((data) =>
            data.json()
          );
        });
        resolve([[...data.list], { ...data.list[0] }]);
      })
      .catch((error) => console.error("Ошибка при запросе:", error));

    const getImage = async (fetchImageSetings, item) => {
      return await fetch(
        `https://api.unsplash.com/photos/random?client_id=${fetchImageSetings.unsplashAccessKey}&query=${item.weather[0].description}&orientation=${fetchImageSetings.orientation}`
      );
    };
  });
};
