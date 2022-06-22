const getMovieImageUrl = (url: string): string => {
  return `https://image.tmdb.org/t/p/w500${url}`
}

const convertMinutesToTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60

  if (m !== 0){
    return `${h}h ${m}m`
  }

  return `${h}h`
}

export {
  getMovieImageUrl,
  convertMinutesToTime
}