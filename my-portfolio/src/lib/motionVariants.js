const emphasizedEase = [0.2, 0, 0, 1];
const standardEase = [0.2, 0, 0, 1];

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
	type: "tween",
	duration: 0.4,
	ease: emphasizedEase,
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
			duration: 0.4,
			delay,
			ease: emphasizedEase,
		},
	},
});

export const inOutFadeUp = (distance = 14, delay = 0, withBlur = false) => ({
	hidden: {
		opacity: 0,
		y: distance,
		transition: {
			duration: 0.2,
			ease: standardEase,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay,
			ease: emphasizedEase,
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
			duration: 0.4,
			delay,
			ease: emphasizedEase,
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
	y: -4,
	scale: 1.01,
	transition: {
		duration: 0.2,
		ease: standardEase,
	},
};

export const tapPress = {
	scale: 0.98,
	transition: {
		duration: 0.2,
		ease: standardEase,
	},
};
