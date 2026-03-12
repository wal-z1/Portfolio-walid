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
	stiffness: 380,
	damping: 28,
	mass: 0.5,
};

export const fadeUp = (distance = 14, delay = 0) => ({
	hidden: {
		opacity: 0,
		y: distance,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.34,
			delay,
			ease: smoothEase,
		},
	},
});

export const inOutFadeUp = (distance = 14, delay = 0, withBlur = false) => ({
	hidden: {
		opacity: 0,
		y: distance,
		transition: {
			duration: 0.24,
			ease: smoothEase,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.34,
			delay,
			ease: smoothEase,
		},
	},
});

export const fadeIn = (delay = 0) => ({
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.34,
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
		duration: 0.12,
		ease: smoothEase,
	},
};

export const tapPress = {
	scale: 0.98,
	transition: {
		duration: 0.06,
		ease: smoothEase,
	},
};
