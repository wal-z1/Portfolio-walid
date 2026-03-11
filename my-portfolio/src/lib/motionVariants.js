const smoothEase = [0.22, 1, 0.36, 1];

export const viewportReveal = {
	once: true,
	amount: 0.16,
};

export const viewportReplay = {
	once: false,
	amount: 0.1,
	margin: "8% 0px 8% 0px",
};

export const springSoft = {
	type: "spring",
	stiffness: 260,
	damping: 22,
	mass: 0.55,
};

export const fadeUp = (distance = 14, delay = 0) => ({
	hidden: {
		opacity: 0,
		y: distance,
		filter: "blur(5px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.46,
			delay,
			ease: smoothEase,
		},
	},
});

export const inOutFadeUp = (distance = 14, delay = 0) => ({
	hidden: {
		opacity: 0,
		y: distance,
		filter: "blur(6px)",
		transition: {
			duration: 0.3,
			ease: smoothEase,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.46,
			delay,
			ease: smoothEase,
		},
	},
});

export const fadeIn = (delay = 0) => ({
	hidden: {
		opacity: 0,
		filter: "blur(4px)",
	},
	visible: {
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.4,
			delay,
			ease: smoothEase,
		},
	},
});

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
	hidden: {},
	visible: {
		transition: {
			staggerChildren: stagger,
			delayChildren,
		},
	},
});

export const hoverLift = {
	y: -6,
	scale: 1.02,
	transition: {
		duration: 0.18,
		ease: smoothEase,
	},
};

export const tapPress = {
	scale: 0.98,
	transition: {
		duration: 0.1,
		ease: smoothEase,
	},
};
