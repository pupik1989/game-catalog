import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getSmallImage } from "../utils";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

import startFull from '../img/star-full.png'
import startEmpty from '../img/star-empty.png'

export default function GameDetail({ pathId }) {
    const navigate = useNavigate()
    const { game, screen, isLoading } = useSelector(state => state.detail)

    const exitDetails = (e) => {
        const elem = e.target;
        if (elem.classList.contains("shadow")) {
            document.body.style.overflow = 'auto';
            navigate('/')

        }
    }


    const platformImage = (name) => {
        console.log(name)
        console.log(name.includes('Xbox Series S/X'))
        switch (name) {
            case 'PlayStation 4':
            case 'PlayStation 5':
                return playstation
            case 'PC':
                return steam
            case 'macOS':
                return apple
            case 'Nintendo Switch':
                return nintendo
            case 'Xbox Series S/X':
            case 'Xbox One':
                return xbox
            default:
                return gamepad
        }
    }



    const getStart = () => {
        const starts = []
        const rating = Math.floor(game.rating)
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) starts.push(<img src={startFull} key={i} alt='startFull' />)
            else starts.push(<img src={startEmpty} key={i} alt='startEmpty' />)
        }
        return starts
    }
    return (
        <>
            {!isLoading && (
                <CardShadow className='shadow' onClick={exitDetails} >
                    <Detail layoutId={String(pathId)}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${String(pathId)}`}>{game.name}</motion.h3>
                                <p>Rating: {Math.round(game.rating * 10) / 10}</p>
                                {getStart()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <img
                                            src={platformImage(data.platform.name)}
                                            alt={data.platform.name}
                                            key={data.platform.id}>
                                        </img>
                                    ))}
                                </Platforms>
                            </Info>

                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${String(pathId)}`} src={getSmallImage(game.background_image, 1280)} alt="game-image" />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map(i => <img src={getSmallImage(i.image, 1280)} key={i.id} alt="screenshot" />)}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    z-index: 2;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar { 
        width: 0.5rem;

    }

    &::-webkit-scrollbar-thumb { 
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track { 
        background-color: white;
    }
`

const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 5rem;
background: white;
position: absolute;
left: 10%;
color: black;
img { 
    width: 100%
}
`
const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
img{
    width: 2rem;
    height: 2rem;
    display: inline;
}
`
const Info = styled(motion.div)`
text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
margin-top: 5rem;
img{
    width: 100%;
}
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`