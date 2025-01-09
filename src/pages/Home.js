import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import Game from "../components/Game";
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';

import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const location = useLocation()
    const navigate = useNavigate()
    const pathId = location.pathname.split('/')[2]
    const dispatch = useDispatch()
    const { popular, newGames, upcoming, searched } = useSelector(state => state.games)
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    const handleKeyDown = (ev) => {
        if (ev.keyCode === 27) {
            document.body.style.overflow = 'auto';
            navigate('/')
        }
    }
    return (
        <GameList onKeyDown={handleKeyDown}>
            <LayoutGroup>
                <AnimatePresence>  {pathId && < GameDetail pathId={pathId} />}</AnimatePresence>

                {searched.length ? (
                    <div>
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map(game => <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />)}
                        </Games>
                    </div>
                ) : undefined}

                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />)}
                </Games>

                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />)}
                </Games>

                <h2>upcoming Games</h2>
                <Games>
                    {upcoming.map(game => <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />)}
                </Games>
            </LayoutGroup>
        </GameList>

    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;

`;
