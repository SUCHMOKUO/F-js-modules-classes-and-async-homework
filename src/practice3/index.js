// export const getPoetry = async () => {
//   const response = await fetch("https://v1.jinrishici.com/all.json");

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const { origin, author, content } = await response.json();

//   return [origin, author, content];
// };

export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const { origin, author, content } = data;
      return [origin, author, content];
    });
};
