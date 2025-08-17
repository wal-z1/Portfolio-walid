import { motion } from "framer-motion";
import PropTypes from "prop-types";
function Timelinecrad({ category, title, url, text, timetext }) {
	return (
		<>
			<span>{category}</span>
			<div className="flex my-2 bg-[rgba(46,28,70,0.1)] border-1 border-[#441570] rounded-xl w-170">
				<img
					src={
						url ||
						"https://img.icons8.com/?size=100&id=4LZxtKlARvqr&format=png&color=FAFAFA"
					}
					className="w-16 h-16 object-contain mt-2 p-3"
					alt={`icon`}></img>
				<div className=" flex flex-col ">
					<div className="p-2">
						<h5 className="mb-2 text-slate-100 text-xl font-semibold">
							{title}
						</h5>
						<p className="text-slate-300 leading-normal font-light">{text}</p>
					</div>
					<div className="mx-3 border-t border-[#441570] pb-3 pt-2 px-1">
						<span className="text-sm text-[#b190b9] font-medium">
							{timetext}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Timelinecrad;
