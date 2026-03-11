import "./QuoteBox.css";
import { motion } from "framer-motion";
import { fadeIn, viewportReplay } from "../../lib/motionVariants";

const QUOTES = [
	'"Happiness depends upon ourselves." — Aristotle',
	'"We suffer more in imagination than in reality." — Seneca',
	'"The unexamined life is not worth living." — Socrates',
	'"He who has a why can bear almost any how." — Nietzsche',
	'"No man is free who is not master of himself." — Epictetus',
	'"Knowledge is power." — Francis Bacon',
	'"Liberty consists in doing what one desires." — John Stuart Mill',
	'"Man is condemned to be free." — Jean-Paul Sartre',
	'"The mind is everything." — Marcus Aurelius',
	'"Act only according to that maxim…" — Immanuel Kant',
	'"Happiness depends upon ourselves."',
	'"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."',
	'"To solve a problem means to reduce it to something already known."',
	'"He who has a why to live can bear almost any how."',
	'"It is one thing to desire, another to be in capacity fit for what we desire."',
	'"The chains of habit are too weak to be felt until they are too strong to be broken."',
];

function QuoteBox() {
	return (
		<motion.span
			className="quote-box block rounded-xl border border-[#5a3e8f]/45 bg-[#0d111740] px-3 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm"
			variants={fadeIn(0.08)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}>
			{QUOTES.map((quote, index) => (
				<div
					key={`${quote}-${index}`}
					className={`quote px-1 ${index % 2 === 0 ? "quote-up" : "quote-right"}`}
					style={{
						"--quote-index": index,
						"--quote-total": QUOTES.length,
					}}>
					{quote}
				</div>
			))}
		</motion.span>
	);
}
export default QuoteBox;
