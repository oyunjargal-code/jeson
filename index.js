// const url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// console.log("start");
// const getTodos = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data);
//   } catch (error) {
//     // console.log(error);
//   }
//   console.log("async function end");
// };
// getTodos();

// console.log("end");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ok");
//     // reject("error");
//   }, 3000);
// });

// promise
//   .then((respnse) => {
//     console.log("response:", respnse);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

// const getData = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const getMovies = async () => {
  const response = await fetch(url, options);

  const movies = await response.json();

  console.log(movies.results[0]);
};

getMovies();
