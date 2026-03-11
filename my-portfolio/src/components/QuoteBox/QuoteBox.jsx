import "./QuoteBox.css";
import { motion } from "framer-motion";
import { fadeIn, viewportReplay } from "../../lib/motionVariants";

function QuoteBox() {
	return (
		<motion.span
			className="quote-box block rounded-xl border border-[#5a3e8f]/45 bg-[#0d111740] px-3 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm"
			variants={fadeIn(0.08)}
			initial="hidden"
			whileInView="visible"
			viewport={viewportReplay}>
			<div className="quote px-1">
				"Logic will get you from A to B. Imagination will take you everywhere."
			</div>
			<div className="quote px-1">
				"Happiness depends upon ourselves." — Aristotle
			</div>
			<div className="quote px-1">
				"We suffer more in imagination than in reality." — Seneca
			</div>
			<div className="quote px-1">
				"The unexamined life is not worth living." — Socrates
			</div>
			<div className="quote px-1">
				"He who has a why can bear almost any how." — Nietzsche
			</div>
			<div className="quote px-1">
				"No man is free who is not master of himself." — Epictetus
			</div>
			<div className="quote px-1">"Knowledge is power." — Francis Bacon</div>
			<div className="quote px-1">
				"Liberty consists in doing what one desires." — John Stuart Mill
			</div>
			<div className="quote px-1">
				"Man is condemned to be free." — Jean-Paul Sartre
			</div>
			<div className="quote px-1">
				"The mind is everything." — Marcus Aurelius
			</div>
			<div className="quote px-1">
				"Act only according to that maxim…" — Immanuel Kant
			</div>
			<div className="quote px-1">"Happiness depends upon ourselves."</div>
			<div className="quote px-1">
				"The greatest enemy of knowledge is not ignorance, it is the illusion of
				knowledge."
			</div>
			<div className="quote px-1">
				"To solve a problem means to reduce it to something already known."
			</div>
			<div className="quote px-1">
				"He who has a why to live can bear almost any how."
			</div>
			<div className="quote px-1">
				"It is one thing to desire, another to be in capacity fit for what we
				desire."
			</div>
			<div className="quote px-1">
				"The chains of habit are too weak to be felt until they are too strong
				to be broken."
			</div>
		</motion.span>
	);
}
export default QuoteBox;
