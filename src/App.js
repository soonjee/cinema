import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import List from './List'
import Main from './Main'
import Header from './Header';
import Glist from './Glist';
import All from './All';
import './common.scss'

const App = () => {
    const genreList = [
        "Action",
        "Animation",
        "Crime",
        "Drama",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Romance",
        "War"
    ]
    return (
        <div>
            <Header>
                <ul className='flex'>
                    {
                        genreList.map(it => {
                            return (
                                <li>
                                    <Link to={it}>{it}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </Header>
            <Routes>
                <Route path="/" element={<Main limit={50} />} />
                {
                    genreList.map(it => {
                        return (
                            <Route path={it} element={<Glist genre={it} limit={5} />} />
                        )
                    })
                }
            </Routes>
            <All />

            <List genre='Adventure' limit={10} />
            <List genre='Horror' limit={10} />
            <List genre='Animation' limit={10} />
        </div>
    )
}

export default App