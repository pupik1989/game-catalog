
import { format, add, sub } from "date-fns";

const base_url = 'https://api.rawg.io/api/'
const key = `key=${process.env.API_KEY}`
const adults = 'exclude_parents=true'

//popular-games
const currentDate = format(new Date(), 'yyyy-MM-dd');
const prevYearDate = format(sub(new Date(), { years: 1 }), 'yyyy-MM-dd');
const nextYearDate = format(add(new Date(), { years: 2 }), 'yyyy-MM-dd');
const popularGamesDate = `games?${adults}&dates=${prevYearDate},${currentDate}&ordering=raiting&page_size=10&${key}`
const upcomingGamesDate = `games?${adults}&dates=${currentDate},${nextYearDate}&ordering=added&page_size=10&${key}`
const newGamesDate = `games?${adults}&$dates=${prevYearDate},${currentDate}&ordering=released&page_size=10&${key}`

export const popularGamesURL = () => `${base_url}${popularGamesDate}`
export const upcomingGamesURL = () => `${base_url}${upcomingGamesDate}`
export const newGamesURL = () => `${base_url}${newGamesDate}`


export const gameDetailsURL = (id) => `${base_url}games/${id}?${key}`
export const gameScreenshotURL = (game_pk) => `${base_url}games/${game_pk}/screenshots?${key}`

export const searchGameURL = (gameName) => `${base_url}games?search=${gameName}&page_size=5&${key}`
