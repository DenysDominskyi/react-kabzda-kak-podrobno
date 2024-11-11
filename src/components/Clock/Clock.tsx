import { useEffect, useState } from 'react'
import styles from './Clock.module.css'

type Props = {
    mode: 'digital' | 'analog'
}

export const Clock = (props: Props) => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogCLockView date={time} />
            break;
        case 'digital':
            defaul:
            view = <DigitalClockView date={time} />
    }

    return <>
        {view}
    </>
}

export type ClockViewProps = {
    date: Date
}

export const DigitalClockView: React.FC<ClockViewProps> = ({ date }) => {
    const get2digitStrings = (num: number) => num < 10 ? '0' + num : num
    return <div className={styles.digitClock}>
        <span>{get2digitStrings(date.getHours())}</span>
        :
        <span>{get2digitStrings(date.getMinutes())}</span>
        :
        <span>{get2digitStrings(date.getSeconds())}</span>
    </div>
}

export const AnalogCLockView: React.FC<ClockViewProps> = ({ date }) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
      };
      const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
      };
      const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
      };

    return (
        <div className={styles.clock}>
        <div className={styles["analog-clock"]}>
          <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
          <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
          <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
        </div>
      </div>
    )
}