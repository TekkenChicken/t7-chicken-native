// SPECIFIC CASES FOR HOW WE FILTER A PROPERTY
// we would just add a method if needed for how a property is checked

/*
 * Hit Level Filter Method
 */
export const filterByHitLevel = {
	key: "hit_level",
	method: (moveHitLevel, hitLevelFilter) => {
		moveHitLevel = moveHitLevel.replace(/ *\([^)]*\) */g, "").trim();
		return moveHitLevel.includes(hitLevelFilter);
	}
};

/**
 * Speed Filter Method
 * @param: { min: (int), max: (int) }
 */
export const filterBySpeed = {
	key: "speed",
	method: (moveSpeed, speedFilter) => {
		const { min, max } = speedFilter;
		if (!min) {
			return moveSpeed < max;
		} else if (!max) {
			return moveSpeed > min;
		}
		return moveSpeed >= min && moveSpeed <= max;
	}
};

/**
 * Special Properties Filter Method
 * @param: property (string)
 */
export const filterBySpecialProp = {
	key: "notes",
	method: (moveProps, filterProp) => {
		return moveProps.replace(/\s/g, '').toLowerCase().includes(filterProp);
	}
};
