import{ useEffect, useState } from 'react'
import styles from './Clock.module.css'

export const Clock = () => {
    const [time, setTime] = useState(new Date())

    const get2digitStrings = (num: number) => num < 10 ? '0' + num : num

    let hoursStr = get2digitStrings(time.getHours())
    let minutesStr = get2digitStrings(time.getMinutes())
    let secondStr = get2digitStrings(time.getSeconds())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div className={styles.digitClock}>
        <span>{hoursStr}</span>
        :
        <span>{minutesStr}</span>
        :
        <span>{secondStr}</span>
    </div>
}
