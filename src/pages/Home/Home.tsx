import { Achievements } from '../../components/Achievements/Achievements'
import { BorrowerRequirements } from '../../components/BorrowerRequirements/BorrowerRequirements'
import { Clients } from '../../components/Clients/Clients'
import { HowToObtain } from '../../components/HowToObtain/HowToObtain'
import { HowToReturn } from '../../components/HowToReturn/HowToReturn'
import { LoanOffers } from '../../components/LoanOffers/LoanOffers'
import { UniqueTechnology } from '../../components/UniqueTechnology/UniqueTechnology'
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection'
import { FrequentlyQuestions } from '../../constant/data'
import styles from './home.module.scss'

export const Home = () => {
	return (
		<main className={styles.home}>
			<WelcomeSection />
			<LoanOffers />
			<UniqueTechnology />
			<BorrowerRequirements />
			<Achievements />
			<HowToObtain />
			<HowToReturn />
			<Clients />

			{/* questions */}
			<div className={styles.questions}>
				<h2>Частые вопросы</h2>
				<div className={styles.cardQuestion}>
					{FrequentlyQuestions.map((question, index) => (
						<div key={index}>
							<h3>{question.question}</h3>
							<p>{question.answer}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
