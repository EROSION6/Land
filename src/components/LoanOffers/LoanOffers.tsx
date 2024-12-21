import { LOANOFFERS } from '../../constant/data'
import styles from './loanOffers.module.scss'

export const LoanOffers = () => {
	return (
		<div id='aboutUs' className={styles.loanOffers}>
			<h2>А у нас еще лучше</h2>
			<div className={styles.grid}>
				{LOANOFFERS.map((loan, index) => (
					<div key={index} className={styles.card}>
						<span>
							<img src={loan.icon} alt={loan.title} />
						</span>
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
