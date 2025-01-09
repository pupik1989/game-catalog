import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

export const loadGames = () => async (dispatch) => {
    const popularGames = await axios.get(popularGamesURL())
    const upcomingGames = await axios.get(upcomingGamesURL())
    const newGames = await axios.get(newGamesURL())
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGames.data.results,
            upcoming: upcomingGames.data.results,
            newGames: newGames.data.results
        }
    })

}



export const fetchSearch = (gameName) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(gameName))
    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.data.results,
        }
    })
}


