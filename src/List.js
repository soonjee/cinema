import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const movieDate = async () => {
        const data = await axios.get('');

    }
    useEffect(() => {


    }, [])
    return (
        <div>
            List
        </div>
    )
}

export default List