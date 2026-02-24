import ExpBarContent from './ExpBarMetadata';

const monthToInt = {
	Jan: 0,
	Feb: 1,
	Mar: 2,
	Apr: 3,
	May: 4,
	Jun: 5,
	Jul: 6,
	Aug: 7,
	Sep: 8,
	Oct: 9,
	Nov: 10,
	Dec: 11,
};

// Calculate the total range of the ExpBar in months based on the earliest and latest dates in ExpBarContent
function calculateExpBarRange() {
	// Get the earliest and latest dates from ExpBarContent
	const { month: earliestMonth, year: earliestYear } = ExpBarContent[0].dateStart;
	const { month: latestMonth, year: latestYear } = ExpBarContent[ExpBarContent.length - 1].dateStart;

	// Calculate the number of months in total range
	const monthsRange = (latestYear - earliestYear) * 12 - monthToInt[earliestMonth] + monthToInt[latestMonth];

	return monthsRange;
}

// Calculate (in percentage) the distance from the start of ExpBar's range for a given month and year
export function calculateFlagPosition(month = 'Jan', year = 2024) {
	const { month: earliestMonth, year: earliestYear } = ExpBarContent[0].dateStart;

	let expBarRange = calculateExpBarRange();
	expBarRange += 4; // Add left/right padding to the Exp-Bar range

	let monthsFromStart = (year - earliestYear) * 12 + (monthToInt[month] - monthToInt[earliestMonth]);
	monthsFromStart += 3; // Shift flag to the right by specified month(s)

	let positionPercent = (monthsFromStart / expBarRange) * 100;

	return positionPercent.toFixed(2);
}

// Calculate the animation delay for a flag based on its position
export function calculateDelayForPosition(positionLeftPercent = 0.50, animationDuration = 2, initialDelay = 0.3) {
    const p = positionLeftPercent / 100;

    // easeInOut cosine func [p = (1 - cos(t * π)) / 2] solved for time (t) given progress (p)
    const t = Math.acos(1 - 2 * p) / Math.PI;

    return (initialDelay + t * animationDuration).toFixed(2);
}