import { BorrowerRequirements as CARDS } from '../../constant/data'
import styles from './borrowerRequirements.module.scss'

export const BorrowerRequirements = () => {
	return (
		<div className={styles.borrowerRequirements}>
			<h2>Требования к заёмщику</h2>
			<div className={styles.grid}>
				{CARDS.map((loan, index) => (
					<div key={index} className={styles.card}>
						<img src={loan.icon} alt={loan.title} />
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
