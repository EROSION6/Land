import styles from './loading.module.scss'

interface ILoading {
	loadingPercentage: number
}

export const Loading = ({ loadingPercentage }: ILoading) => {
	return (
		<div className={styles.loading}>
			<h3>Проверяем паспорт</h3>
			<div className={styles.slider}>
				<div
					className={styles.fill}
					style={{
						width: `${loadingPercentage}%`,
						backgroundColor: 'rgb(234, 93, 57)',
					}}
				/>
				<span
					style={{
						left: `${loadingPercentage}%`,
						position: 'absolute',
						top: '50%',
						transform: 'translate(-100%, -50%)',
					}}
				>
					{loadingPercentage}%
				</span>
			</div>
			<div className={styles.percent}>
				<span>{loadingPercentage}%</span>
				<span>100%</span>
			</div>
		</div>
	)
}
