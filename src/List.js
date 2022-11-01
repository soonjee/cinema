import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Load from './Load';

const List = ({ genre, limit }) => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);

    const movieData = async () => {
        setLoad(true)
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${genre}`); // ?limit=50 갯수 제한, &genre=Action 장르 중 액션으로 설정
        getMovie(movie.data.data.movies);
        setLoad(false);
    }
    useEffect(() => {
        movieData()
    }, [genre])
    return (
        <div>
            {
                load
                    ? <Load />
                    : // 아니면 뿌려라.
                    <ul className='List'>
                        {
                            movie.map(it => {
                                return (
                                    <li key={it.id}>
                                        <figure>
                                            <img src={it.medium_cover_image} alt={it.title} />
                                        </figure>
                                        <div className='movie_info'>
                                            <div>{it.title_long}</div>
                                            <div>{it.rating}</div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default List