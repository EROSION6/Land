import { Checkbox, FormControlLabel, Slider } from '@mui/material'
import { useState } from 'react'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import styles from './personalData.module.scss'

interface ISetting {
	isOpenSettings: boolean
}

const personalDataInputs = [
	{
		name: 'Фамилия *',
		type: 'text',
		placeholder: 'Введите вашу фамилию',
		id: 'surname',
	},
	{ name: 'Имя *', type: 'text', placeholder: 'Введите ваше имя', id: 'name' },
	{ name: 'Телефон *', type: 'tel', placeholder: 'Введите ваш номер', id: 'tel' },
	{
		name: 'Email *',
		type: 'email',
		placeholder: 'Введите вашу почту',
		id: 'email',
	},
]

export const PersonalData = () => {
	const [isOpenSettings, setOpenSettings] = useState(false)

	return (
		<div className={styles.main}>
			<Block className={styles.blockSum}>
				<div className={styles.left}>
					<span>Сумма и сроки займа: </span>
					<b>35 000 ₽ на 15 дней</b>
				</div>
				<button onClick={() => setOpenSettings(!isOpenSettings)}>
					<img src='/src/assets/svg/Vector (5).svg' alt='pen' />
				</button>
			</Block>
			<Setting isOpenSettings={isOpenSettings} />
			<h2>Личные данные</h2>
			<Block className={styles.infoper}>
				{personalDataInputs.map(({ name, type, placeholder, id }) => (
					<Input
						key={id}
						name={name}
						id={id}
						type={type}
						placeholder={placeholder}
					/>
				))}
				<FormControlLabel
					control={
						<Checkbox
							defaultChecked
							sx={{ color: '#c8c8c8', '&.Mui-checked': { color: '#c8c8c8' } }}
						/>
					}
					label='Я ознакомлен и согласен со следующим:'
					sx={{ color: '#c8c8c8' }}
				/>
				<div className={styles.insurance}>
					<ul>
						{[
							'Публичная оферта',
							'Согласие на получение рекламы',
							'Тарифы сервиса',
						].map((rules, index) => (
							<li key={index}>{rules}</li>
						))}
					</ul>
				</div>
				<Button>Далее</Button>
			</Block>
		</div>
	)
}

const Setting = ({ isOpenSettings }: ISetting) => (
	<div
		className={styles.overflow}
		style={{ display: isOpenSettings ? 'flex' : 'none' }}
	>
		<Block className={styles.slider}>
			{['Требуемая сумма', 'Срок займа'].map((label, index) => (
				<div key={index} className={styles.sliderSum}>
					<div className={styles.text}>
						<span>{label}</span>
						<b>{label === 'Требуемая сумма' ? '35 000 ₽' : '7 дней'}</b>
					</div>
					<Slider
						aria-label={label}
						value={label === 'Требуемая сумма' ? 22 : 12}
						sx={{
							color: '#EA5D39',
							'& .MuiSlider-thumb': {
								backgroundColor: 'white',
							},
						}}
					/>
				</div>
			))}
			<div className={styles.footer}>
				<div className={styles.approved}>
					<span>Одобрено до:</span>
					<b>25 000 ₽</b>
				</div>
				<div className={styles.approved}>
					<span>Срок до:</span>
					<b>7 дней</b>
				</div>
				<div className={styles.approved}>
					<span>Ставка:</span>
					<b>0%</b>
				</div>
			</div>
		</Block>
	</div>
)
