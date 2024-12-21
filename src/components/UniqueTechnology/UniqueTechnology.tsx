import { Button } from '../ui/Button/Button'
import styles from './uniqueTechnology.module.scss'

export const UniqueTechnology = () => {
	return (
		<div className={styles.uniqueTechnology}>
			<div className={styles.left}>
				<b>Уникальная технология</b>
				<h3>Искусственный интеллект. Big Data</h3>
				<p>
					Наша система работает без звонков, полностью автоматизированно. Вам
					нужно только заполнить анкету. Дальше система сделает все сама
				</p>
				<Button>Оформить заявку</Button>
			</div>
			<div className={styles.right}>
				<img src='/public/picture.png' alt='picture' />
			</div>
		</div>
	)
}
