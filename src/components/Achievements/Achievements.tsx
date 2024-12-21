import styles from './achievements.module.scss'

const achievement = [
	{
		label: '13155',
		description: 'Сегодня выдано займов',
	},
	{
		label: '30 000 ₽',
		description: 'Средняя сумма займа',
	},
	{
		label: '105 005 ₽',
		description: 'Выдано рублей за сутки',
	},
]

export const Achievements = () => {
	return (
		<div
			className={styles.achievements}
			style={{
				backgroundImage: 'url("/public/bg (1).png")',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className={styles.content}>
				<h2>Наши достижения</h2>
				<div className={styles.grid}>
					{achievement.map((card, index) => (
						<div key={index} className={styles.card}>
							<h3>{card.label}</h3>
							<p>{card.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
