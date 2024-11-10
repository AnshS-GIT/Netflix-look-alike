const trendingMovies = [
    "https://m.media-amazon.com/images/M/MV5BZjRmMzA2MWYtZGEyMS00YjY4LWJiOTEtNjU1NWMyYTRjM2M3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWI_TEb7EeKJklJg3-_91CW0DDzD_nsf-Neg&s",
    "https://image.tmdb.org/t/p/original/k5mQ2G1jS47fuxCjmkzFDeaNYvj.jpg",
    "https://m.media-amazon.com/images/M/MV5BZTNjOTg0YjctYTlmNC00MTFhLWFkMGMtY2IyMWI0MmUyZTUwXkEyXkFqcGc@._V1_.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg",
    "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUSrcIMUG-ey2fPMbmJ4bDVb7ka0IjJ0aITdUoNEXsU_EI4Pq5ofr2GXcxwggJe1P9aZEY28xG-7kOIfpCFRdgY3-fdJXeh0jLmab1T-ZftTFA3cJkd0annIMSIOvXva7PHGkg.jpg?r=688",
    "https://m.media-amazon.com/images/M/MV5BZjJkZWM4ODYtNTY0OS00MjA0LTliODctYjY1ZThmYWM5ZGY4XkEyXkFqcGc@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjc1NDJmMjAtMTJmYi00ZGJmLWFhZTItNThmOTQyMzU4MGM3XkEyXkFqcGc@._V1_.jpg",
    "https://preview.redd.it/saripodhaa-sanivaaram-new-poster-v0-rs065dhkp1gd1.png?auto=webp&s=35c51931d8cee94287fd714fd9ec8d86c6c846cd",
    "https://m.media-amazon.com/images/M/MV5BZDQ3OWE4YzgtNWU3Ni00MzI2LWJmNDYtMWE1YjkxZTA3NGU3XkEyXkFqcGc@._V1_.jpg"

  ];
  
  const topPicksMovies = [
    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaxk0JqWZ2E8OtaOhM8b3VwSgCv0qeEp5u88wt5eqZN0em6KWUI1ub1VBwKimU_e1_RTkN8Y7MWBu7rcj1UAYcLAaZvw615IgupK.jpg?r=969",
    "https://occ-0-8407-448.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaDTiCjJyw__h7NajQkWEjxa1IoXWpERG5b8Pe3AUD7KhS3rb90Kwague1-t7r0BfU65fy7HHZLLZEmYGULvb8tP2ntkcTfkN1K5.jpg?r=be8",
    "https://www.justwatch.com/images/poster/115370120/s718/3-idiots.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3V1ExLFDawSG9fjQ3bhp9ENM-QtzoNV2mRg&s",
    "https://m.media-amazon.com/images/M/MV5BNGRmYjBmOWQtMmY1NS00Njk3LWFkYWYtZWY3ODQ0N2U2NTBhXkEyXkFqcGc@._V1_.jpg",
    "https://preview.redd.it/dunki-netflix-release-discussion-thread-v0-db5un149ulic1.jpeg?auto=webp&s=e60c7f61b7be30992df5bc70ba9a689a297885a0",
    "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcxB8-rLxhOVFT1OjdlIdBYlXj7sOgPMzmZ7g4iwNtaAKqSbM5BXnJ_P_EeZ2O_8OOdrqXxrx8Dux_CVEcOoRW69ezrTNRbix8VU.jpg?r=ddf",
    "https://www.tvguide.com/a/img/catalog/provider/1/1/1-9766267102.jpg",
    "https://ntvb.tmsimg.com/assets/p20492187_b_h8_aa.jpg?w=1280&h=720",
    "https://m.media-amazon.com/images/M/MV5BNjg5ZWY5ZTItYzhhZi00MDE5LTg5NDgtZGM4MWI3NTgyNTZhXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
  ];
  
  function populateMovies(containerId, movieUrls) {
    const container = document.getElementById(containerId);
    movieUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = "Movie Poster";
      container.appendChild(img);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    populateMovies("trending", trendingMovies);
    populateMovies("top-picks", topPicksMovies);
  });
  