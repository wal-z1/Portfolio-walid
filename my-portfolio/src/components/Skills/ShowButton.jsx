import { useCallback } from "react";
import { motion } from "framer-motion";

function ShowButton({ boolean, callback }) {
	if (boolean === true) {
		return (
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="font-outfit rounded-sm border-1 border-[#441570] bg-transparent px-6 py-3 text-lg font-medium text-[#FAFAFA] text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:bg-[hsl(271,64%,10%)] cursor-pointer 
						"
				onClick={callback}>
				<img
					className="w-5 h-5 object-contain relative top-1"
					src="https://img.icons8.com/?size=100&id=40021&format=png&color=FAFAFA"
					alt="expand icon"
				/>
				<span className="ml-2 ">Show More</span>
			</motion.button>
		);
	} else {
		return (
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="font-outfit rounded-sm border-1 border-[#441570] bg-transparent px-6 py-3 text-lg font-medium text-[#FAFAFA] text-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:bg-[hsl(271,64%,10%)] cursor-pointer 
						"
				onClick={callback}>
				<img
					className="w-5 h-5 object-contain relative top-1"
					src="https://img.icons8.com/?size=100&id=40025&format=png&color=FAFAFA"
					alt="expand icon"
				/>
				<span className="ml-2 ">Collapse</span>
			</motion.button>
		);
	}
}
export default ShowButton;
