import { Block } from '../../components/ui/Block/Block'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import styles from './addressForm.module.scss'

const inputFields = [
	{ name: 'Населенный пункт *', placeholder: 'Ваш населенный пункт' },
	{ name: 'Улица *', placeholder: 'Улица где вы проживаете' },
	{ name: 'Дом *', placeholder: 'Ваш номер дома' },
	{ name: 'Корпус *', placeholder: 'Необязательное поле' },
	{ name: 'Строение *', placeholder: 'Необязательное поле' },
	{ name: 'Квартира *', placeholder: 'Необязательное поле' },
]

export const AddressForm = () => {
	return (
		<div className={styles.registrations}>
			<h3>Адрес регистрации</h3>
			<Block className={styles.registrationForm}>
				<div className={styles.option}>
					<label htmlFor=''>Серия *</label>
					<select name='' id=''>
						<option value=''>Выберите регион</option>
					</select>
				</div>
				{inputFields.map((field, index) => (
					<Input
						key={index}
						name={field.name}
						placeholder={field.placeholder}
						type='text'
					/>
				))}
				<Button>Далее</Button>
			</Block>
		</div>
	)
}
