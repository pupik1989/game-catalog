import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from "react-router-dom";
import { getSmallImage } from "../utils";

export default function Game({ name, released, image, id }) {
    const dispatch = useDispatch()



    const getDetailsHandle = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id))
    }
    return (
        <StyledGame layoutId={String(id)} onClick={getDetailsHandle}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${String(id)}`}>{name}</motion.h3>
                <p>Release Date: {released}</p>
                <motion.img layoutId={`image ${String(id)}`} src={getSmallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align:center;
    cursor: pointer;
    border-radius:1rem;
    overflow: hidden;
    img {
        width:100%;
        height: 40vh;
        object-fit: cover;
    }
`
