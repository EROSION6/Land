import { HowToReturn as CARDS } from '../../constant/data'
import styles from './howToReturn.module.scss'

export const HowToReturn = () => {
	return (
		<div id='return' className={styles.howToReturn}>
			<h2>Как вернуть?</h2>
			<p>
				Вы можете вернуть деньги любым удобным способом: от банковского перевода
				до оплаты картой
			</p>
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
		</div>
	)
}
