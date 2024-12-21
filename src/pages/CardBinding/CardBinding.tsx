import { Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import styles from './cardBinding.module.scss'

export const CardBinding = () => {
	const [loadingPercentage, setLoadingPercentage] = useState(0)
	const [isLoading, setLoading] = useState(false)

	const handleStartLoading = () => {
		setLoading(true)
		setLoadingPercentage(0)
		const timer = setInterval(() => {
			setLoadingPercentage(prev => {
				if (prev < 100) {
					return prev + 1
				} else {
					setLoading(false)
					clearInterval(timer)
					return prev
				}
			})
		}, 100)

		return () => clearInterval(timer)
	}

	const cardInputs = [
		{ name: 'Номер карты *', placeholder: '4405 5605 1357 4901' },
		{ name: 'Срок действия *', placeholder: 'Месяц' },
		{ name: '.', placeholder: 'Год' },
		{ name: 'CVC *', placeholder: '•••' },
	]

	return (
		<div className={styles.linkingCard}>
			{!isLoading ? (
				<>
					<Block className={styles.linkingCardError}>
						<div className={styles.bankError}>
							{['logo (7)', 'logo (5)'].map((logo, index) => (
								<div key={index} className={styles.imageError}>
									<img src={`/src/assets/svg/${logo}.svg`} alt='' />
									<span>X</span>
								</div>
							))}
						</div>
						<p>
							Виртуальные карты, а так же карты Т-Банка и Райфайзен Банка не
							принимаются
						</p>
					</Block>
					<h3>Привязка карты</h3>
					<p className={styles.linkingCardDescri}>
						Укажите номер карты, для получения займа. С вашей карты будет списан
						и возвращен 1 ₽ для проверки корректности ввода данных.
					</p>
					<Block className={styles.cardForm}>
						<div className={styles.cardInput}>
							<Input {...cardInputs[0]} />
							<img src='/src/assets/svg/mastercard.svg' alt='' />
						</div>
						<div className={styles.cardDeadlines}>
							<div className={styles.left}>
								<Input {...cardInputs[1]} />
								<Input {...cardInputs[2]} />
							</div>
							<Input {...cardInputs[3]} />
						</div>
						<div className={styles.footer}>
							<img
								src='/src/assets/svg/logo (8).svg'
								alt=''
								className={styles.logo}
							/>
							<FormControlLabel
								control={<Checkbox sx={{ color: 'rgb(61, 60, 65)' }} />}
								sx={{ color: 'white', my: 2 }}
								label='У меня нет карты'
							/>
							<Button onClick={handleStartLoading}>Далее</Button>
							<p>
								Для клиентов установлен следующий тариф на платный подбор
								займов: на 30 суток за 2 000 ₽ или 499 ₽ за 7 дней в случае
								недостаточности средств. Отменить подписку можно на специальной
								странице.
							</p>
						</div>
					</Block>
				</>
			) : (
				<div className={styles.loadingPassport}>
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
				</div>
			)}
		</div>
	)
}
