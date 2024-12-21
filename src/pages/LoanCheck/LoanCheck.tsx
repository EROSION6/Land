import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import styles from './loanСheck.module.scss'

export const LoanСheck = () => {
	return (
		<div className={styles.loanСheck}>
			<h3>Сожалеем, Артём</h3>
			<p className={styles.loanСheckDescription}>
				Но ваш скоринг <b>750</b> из <b>1000</b> слишком низок для одобрения
				займа у нас
			</p>
			<Block className={styles.loanСheckBlock}>
				<strong>Но подождите!</strong>
				{[
					'/src/assets/svg/coin.svg',
					'/src/assets/svg/soup.svg',
					'/src/assets/svg/coin.svg',
				].map((img, index) => (
					<img key={index} src={img} alt='icon' />
				))}
				<p>
					Вам готовы выдать займ на сумму <b>30000 ₽</b> наши партнеры
				</p>
				<Button>Получить деньги</Button>
			</Block>
		</div>
	)
}
