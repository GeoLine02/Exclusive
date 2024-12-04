import { useState } from "react";

const useFetch = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setdata] = useState<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [error, setError] = useState<any>(null)

        const fetchData = async (url : string, options : object) => {
            setIsLoading(true)
            try {
                const resp =await fetch(url, options)
                if (resp.ok) {
                    const data = await resp.json()
                    setdata(data)
                    setIsLoading(false)
                    return data
                }
            } catch (err) {
                console.log(err)
                setError(err)
                setIsLoading(false)
            } finally  {
                setIsLoading(false)
            }
        }

  return {isLoading, data, error, fetchData}
}

export default useFetch