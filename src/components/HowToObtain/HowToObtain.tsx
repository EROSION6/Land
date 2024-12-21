import { HowToObtain as CARDS } from '../../constant/data'
import { Button } from '../ui/Button/Button'
import styles from './howToObtain.module.scss'

export const HowToObtain = () => {
	return (
		<div id='obtain' className={styles.howToObtain}>
			<h2>Как получить?</h2>
			<p>Приготовьте паспорт и освободите 10 минут своего времени</p>
			<div className={styles.grid}>
				{CARDS.map((loan, index) => (
					<div key={index} className={styles.card}>
						<span></span>
						<div className={styles.description}>
							<h3>{loan.title}</h3>
							<p>{loan.description}</p>
						</div>
					</div>
				))}
			</div>
			<Button>Получить сейчас</Button>
		</div>
	)
}
