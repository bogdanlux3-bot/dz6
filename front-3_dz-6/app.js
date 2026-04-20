const arr = [
{
 title: "Breaking Bad",
   year: 2008,

   genre: "Crime",

   rating: 9.5,

   seasons: 5,

   duration: 47, // средняя длительность серии в минутах

   finished: true,

   actors: ["Bryan Cranston", "Aaron Paul"],

   country: "USA"
},
{
    title: "film-1",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    seasons: 2,
    duration: 60,
    finished: false,
    actors: ["Tom Hardy", "Charlize Theron"],
    country: "Australia"
},
{
    title: "film-2",
    year: 2018,
    genre: "Comedy",
    rating: 7.5,
    seasons: 3,
    duration: 45,
    finished: true,
    actors: ["Jim Carrey", "Steve Carell"],
    country: "Canada"
},
{
    title: "film-3",
    year: 2020,
    genre: "Horror",
    rating: 6.9,
    seasons: 4,
    duration: 55,
    finished: false,
    actors: ["Bill Skarsgård", "Finn Wolfhard"],
    country: "USA"
},
{
    title: "film-4",
    year: 2012,
    genre: "Fantasy",
    rating: 8.7,
    seasons: 6,
    duration: 58,
    finished: true,
    actors: ["Emma Watson", "Daniel Radcliffe"],
    country: "UK"
},
{
    title: "film-5",
    year: 2019,
    genre: "Thriller",
    rating: 8.0,
    seasons: 2,
    duration: 52,
    finished: false,
    actors: ["Jake Gyllenhaal", "Ryan Gosling"],
    country: "Brazil"
},
{
    title: "film-6",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.9,
    seasons: 5,
    duration: 48,
    finished: true,
    actors: ["Chris Pratt", "Zoe Saldana"],
    country: "Oman"
},
{
    title: "film-7",
    year: 2011,
    genre: "Romance",
    rating: 7.2,
    seasons: 1,
    duration: 44,
    finished: true,
    actors: ["Ryan Reynolds", "Sandra Bullock"],
    country: "KR"
},
{
    title: "film-8",
    year: 2021,
    genre: "Adventure",
    rating: 8.4,
    seasons: 3,
    duration: 57,
    finished: false,
    actors: ["Dwayne Johnson", "Emily Blunt"],
    country: "RS"
},
{
    title: "film-9",
    year: 2017,
    genre: "Mystery",
    rating: 7.8,
    seasons: 4,
    duration: 53,
    finished: true,
    actors: ["Benedict Cumberbatch", "Martin Freeman"],
    country: "UK"
},
{
    title: "film-10",
    year: 2014,
    genre: "Animation",
    rating: 8.6,
    seasons: 2,
    duration: 40,
    finished: false,
    actors: ["Tom Hanks", "Tim Allen"],
    country: "Australia"
}
]

 /* const names = arr.forEach((a) => {
    return console.log(` название ${a.title} -- ${a.rating}`);
}); */
 
/* const newArray = arr.map((a) => {
    return `${a.title} (${a.year}) -- ${a.seasons} сезонов`;
});
console.log(newArray); //новый массив, где каждый элемент строка вида - "Breaking Bad (2008)
 */

// 3) Задание

/* const onlyCinema = arr.filter(a => a.finished === false)
console.log(onlyCinema) */ // Получил фильмы которые  еще не закончены


//4) Задание
/* const firstCinema = arr.find((a) => a.seasons > 5);
console.log(firstCinema);
 */

//5) Задание 

/* const hasHighRating = arr.some((a) => a.rating > 9);

console.log(hasHighRating); */

//6) Задание 
/* const oldSeries = arr.filter((a) => a.year <= 2000);
console.log(oldSeries.length === 0); */

//7) Задание 

/* const average = arr.reduce((sum, a) => {
    return sum + a.rating;
}, 0) / arr.length;

console.log(average); */

//8) Задание 
arr.sort((a, b) => b.rating - a.rating);

console.log(arr);
