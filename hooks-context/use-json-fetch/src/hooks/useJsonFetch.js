import { useEffect, useState } from "react";

export default function useJsonFetch(url) {
    const [data, setData] = useState()
    const [loading, setLoading ] = useState(false)

    const get = async() => {
        setLoading(true)
        await fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data.status));
        setLoading(false)
    }

    useEffect(() => {
        get()
    }, [])

    return [data, loading]
}