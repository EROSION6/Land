import { clients as CLIENT } from '../../constant/data'
import styles from './client.module.scss'

export const Clients = () => {
	return (
		<div className={styles.clients}>
			<h2>Что о нас говорят? </h2>
			<div className={styles.grid}>
				{CLIENT.map((client, index) => (
					<div key={index} className={styles.card}>
						<img src={client.avatar} alt='' />
						<span>
							{client.grade}
							<img src='/src/assets/svg/Vector (21).svg' alt='star' />
						</span>
						<div className={styles.description}>
							<h3>{client.name}</h3>
							<p>{client.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
