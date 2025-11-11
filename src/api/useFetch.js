import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])

    return {data};
}
