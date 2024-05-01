import{ useEffect, useState } from 'react'

interface SlowServerWarningPropsType {
    isLoading: boolean
}

const SlowServerWarning = ({isLoading} : SlowServerWarningPropsType) => {
    const [showSlowServerMessage, setShowSlowServerMessage] = useState<boolean>(false)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (isLoading) {
                setShowSlowServerMessage(true)
            }
        }, 3000)

        return () => clearTimeout(timeOut)
    }, [isLoading])

  return (
    <div>
        {showSlowServerMessage && <p>Server is slow, please wait.</p>}
    </div>
  )
}

export default SlowServerWarning