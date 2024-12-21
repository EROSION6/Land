import { useEffect, useState } from 'react'
import styles from './timer.module.scss'

interface ITimer {
	days: number
	hours: number
	minutes: number
	seconds: number
}

export const Timer = () => {
	const [time, setTime] = useState<ITimer>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})
	const [prevTime, setPrevTime] = useState<ITimer>(time)

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date()
			const targetDate = new Date()
			targetDate.setHours(targetDate.getHours() + 1)

			const totalSeconds = Math.floor(
				(targetDate.getTime() - now.getTime()) / 1000
			)
			if (totalSeconds < 0) {
				clearInterval(interval)
				return
			}
			const days = Math.floor(totalSeconds / (3600 * 24))
			const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
			const minutes = Math.floor((totalSeconds % 3600) / 60)
			const seconds = totalSeconds % 60

			setPrevTime(time)
			setTime({ days, hours, minutes, seconds })
		}, 1000)

		return () => clearInterval(interval)
	}, [time])

	return (
		<div className={styles.timer}>
			<div className={styles.content}>
				<h3>Осталось времени:</h3>
				<div className={styles.time}>
					{['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
						<div className={styles.flipContainer} key={index}>
							<span
								className={`${styles.flipCard} ${
									prevTime[unit as keyof ITimer] !== time[unit as keyof ITimer]
										? styles.flip
										: ''
								}`}
							>
								{String(time[unit as keyof ITimer]).padStart(2, '0')}
							</span>
							<span className={`${styles.flipCard} ${styles.prevCard}`}>
								{String(prevTime[unit as keyof ITimer]).padStart(2, '0')}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
