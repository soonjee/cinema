import axios from 'axios'
import Slider from 'react-slick';
import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Load from './Load';


const Main = ({ limit }) => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    const MS = useRef(null)

    const movieData = async () => {
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}`); // ?limit=50 갯수 제한, &genre=Action 장르 중 액션으로 설정
        console.log(movie.data.data.movies);
        getMovie(movie.data.data.movies);
        setLoad(false);
    }
    useEffect(() => {
        movieData()
    }, [])
    return (
        <section className='Main'>
            {
                load ? <Load />
                    : // 아니면 뿌려라.
                    <Slider className='Main'
                        slidesToShow={5}
                        arrows={false}
                        ref={MS}
                        centerMode={true}
                        centerPadding={'100px'}
                    >
                        {
                            movie.map(it => {
                                return (
                                    <div key={it.id} className="itm">
                                        <figure>
                                            <img src={it.medium_cover_image} alt={it.title} />
                                        </figure>
                                        <div className='case'>
                                            <ul className='genre'>
                                                {
                                                    it.genres.map((g, i) => <li key={i}>{g}</li>)
                                                }
                                            </ul>
                                        </div>
                                        <div className='title'>{it.title_long}</div>
                                        <div className='grade'>{it.rating}</div>
                                        <button className='btn'> + </button>
                                    </div>
                                )
                            })
                        }
                    </Slider>
            }
            <div className="arrows">
                <i className="xi-arrow-left" onClick={() => MS.current.slickPrev()}></i>
                <i className="xi-arrow-right" onClick={() => MS.current.slickNext()}></i>
            </div>
        </section>
    )
}

export default Main