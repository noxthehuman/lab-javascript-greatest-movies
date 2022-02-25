// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(function(names) {
    return names.director}) 
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if (arr.length === 0)
  {
    return 0;
  }

  const dramaSpiel = arr.filter(function(arr) {
    let amount = 0;
    if (arr.director === 'Steven Spielberg' && arr.genre.includes('Drama'))
    {
      amount+= 1;
    }
    return amount;
  })
  return dramaSpiel.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0)
  {
    return 0;
  }

  const average = arr.reduce(function(previousValue, currentMovie) {
    return (previousValue + (currentMovie.score || 0))
  }, 0)

  const av = Math.round(((average /arr.length) + Number.EPSILON) * 100) / 100;
  
  return av;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  const dramaMovies = arr.filter(drama => drama.genre.includes('Drama'));
  console.log(dramaMovies);

  if (dramaMovies.length === 0)
  {
    return 0;
  }

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  if(arr.length === 1)
  {
    return arr;
  }

  const sorted = [...arr];
  
  sorted.sort(function(a, b) {
    const compareYear = parseFloat(a.year) - parseFloat(b.year);
    if (compareYear === 0) {
      return a.title.localeCompare(b.title);
    }
    return compareYear;
  })

  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titleSorted = movies.map(function(titleM) {
    return titleM.title})
  
  console.log(titleSorted);

  titleSorted.sort();
  if(titleSorted.length > 20)
  {
    const topTwenty = [];
    for (i=0; i < 20; i++)
    {
        topTwenty.push(titleSorted[i]);
    }

    return topTwenty;
  }

  return titleSorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
