// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => movie.director);
  const uniqueDirectors = [...new Set(allDirectors)];
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
    return 0;
  }

  const filteredMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayMovies) {
  if (!Array.isArray(arrayMovies) || arrayMovies.length === 0) {
    return 0;
  }
  const totalScore = arrayMovies.reduce((sum, movie) => {
    
    return movie.score ? sum + movie.score : sum;
  }, 0);

  const average = totalScore / arrayMovies.length;

  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesDrama) {
  if (!Array.isArray(moviesDrama) || moviesDrama.length === 0) {
    return 0;
  }

  const dramaMovies = moviesDrama.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScore = dramaMovies.reduce((sum, movie) => {
    return movie.score ? sum + movie.score : sum;
  }, 0);

  const average = totalScore / dramaMovies.length;

  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesYear) {
  return [...moviesYear].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesTitle) {
  const sortedMovies = [...moviesTitle];

  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  const first20Titles = sortedMovies.slice(0, 20).map((movie) => movie.title);

  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesDuration) {
  return moviesDuration.map((movie) => {
    const duration = movie.duration;
    const hoursMatch = duration.match(/(\d+)h/);
    const minutesMatch = duration.match(/(\d+)min/);

    const hoursInMinutes = hoursMatch ? parseInt(hoursMatch[1]) * 60 : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

    const totalMinutes = hoursInMinutes + minutes;

    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}


function bestYearAvg(movies) {
  if (!movies.length) return null;

  
  const yearScores = {};

  movies.forEach(movie => {
    if (movie.year && typeof movie.score === 'number') {
      if (!yearScores[movie.year]) {
        yearScores[movie.year] = [];
      }
      yearScores[movie.year].push(movie.score);
    }
  });

 
  let bestYear = null;
  let bestAvg = 0;

  for (const year in yearScores) {
    const scores = yearScores[year];
    const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;

    if (
      avg > bestAvg ||
      (avg === bestAvg && parseInt(year) < parseInt(bestYear))
    ) {
      bestAvg = avg;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(1)}`;
}


