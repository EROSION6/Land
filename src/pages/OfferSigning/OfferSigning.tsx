import { Typography } from '@mui/material'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import styles from './offerSigning.module.scss'

const conditions = [
	'Правила предоставления займов',
	'Соглашение об использовании АСП',
	'Согласие на получение рекламы',
	'Согласие на обработку персональных данных',
]

export const OfferSigning = () => {
	return (
		<div className={styles.signingOffer}>
			<Block className={styles.signingOfferBlock}>
				<strong>
					Займ уже почти <span>одобрен!</span>
				</strong>
				<p>
					Осталось подписать документы смс-кодом для принятия решения. После
					подписания, оператор не будет звонить вам. Система работает
					автоматически.
				</p>
			</Block>

			<h3>Подписание оферты</h3>

			<Block className={styles.signingOfferForm}>
				<div className={styles.btns}>
					<button>Входящий звонок</button>
					<button>SMS код</button>
				</div>
				<form>
					<Input placeholder='+8 (000) 0000-00-0' />
					<button>Получить код</button>
				</form>

				<div className={styles.dopInfo}>
					<div className={styles.check}>
						<img src='/src/assets/svg/Group  (1).svg' alt='' />
						<p>Согласен со следующими условиями и документами:</p>
					</div>
					<div className={styles.insurance}>
						<ul>
							{conditions.map((aythor, index) => (
								<li key={index}>
									<img src='/src/assets/svg/Group  (1).svg' alt='' />
									<span>{aythor}</span>
								</li>
							))}
						</ul>
					</div>
					<Button>Получить деньги</Button>
					<Typography
						sx={{
							color: 'white',
							fontSize: '16px',
							mt: 1,
							textAlign: 'center',
						}}
					>
						Стоимость наших услуг составляет 1999 ₽ за календарный месяц
					</Typography>
				</div>
			</Block>
		</div>
	)
}
