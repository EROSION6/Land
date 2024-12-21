import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material'
import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import styles from './passportInfo.module.scss'

const inputFields = [
	{ name: 'Серия *', placeholder: 'Введите серию вашего паспорта' },
	{ name: 'Номер *', placeholder: 'Введите номер' },
	{ name: 'Дата выдачи *', placeholder: '10.10.2024' },
	{ name: 'Кем выдан *', placeholder: 'Введите кем выдан' },
	{ name: 'Код подразделения *', placeholder: 'Введите код подразделения' },
	{ name: 'Место рождения *', placeholder: 'Введите место рождения' },
	{ name: 'Дата рождения *', placeholder: 'дд/мм/гггг' },
	{ name: 'Снилс адрес', placeholder: 'Необязательное поле' },
]

export const PassportInfo = () => {
	return (
		<div className={styles.passport}>
			<Typography variant='h3'>Паспорт</Typography>
			<Typography>
				Вносите только достоверные данные! Точно как у Вас в паспорте
			</Typography>
			<Block className={styles.passportForm}>
				{inputFields.map(({ name, placeholder }, index) => {
					let inputType = 'text'
					if (index === 2) {
						inputType = 'date'
					} else if (index === 6) {
						inputType = 'date'
					}
					return (
						<Input
							key={index}
							name={name}
							placeholder={placeholder}
							type={inputType}
						/>
					)
				})}

				<FormGroup sx={{ flexDirection: 'row' }}>
					{['Мужской', 'Женский'].map(label => (
						<FormControlLabel
							key={label}
							control={
								<Checkbox
									defaultChecked
									sx={{
										color: '#c8c8c8',
										'&.Mui-checked': { color: '#c8c8c8' },
									}}
								/>
							}
							label={label}
							sx={{ color: '#c8c8c8' }}
						/>
					))}
				</FormGroup>
				<Button>Далее</Button>
			</Block>
		</div>
	)
}
