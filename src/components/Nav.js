import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
import { fetchSearch } from '../actions/gamesAction'

export default function Nav() {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput('')
    }

    const clearSearch = () => async () => {
        dispatch({
            type: 'CLEAR_SEARCH'
        })
    }
    return (
        <StyledNav>
            <Logo onClick={clearSearch()}>
                <img src={logo} alt='logo' key='logo' />
                <h1>Game Catalog</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submit} type='submit'>Search</button>
            </form>
        </StyledNav>
    )
}


const StyledNav = styled(motion.nav)`
padding: 3rem 5rem;
text-align: center;
input{
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
    font-weight: bold;
}

button{
    font-size: 1.5rem;
    border:none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color:white;
}
`

const Logo = styled(motion.div)`
display: flex;
justify-content: center;
padding: 1rem;
cursor: pointer;
img{
    height: 2rem;
    width: 2rem;
    margin-right:1rem;
}
`