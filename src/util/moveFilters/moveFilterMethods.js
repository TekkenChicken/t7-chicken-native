// SPECIFIC CASES FOR HOW WE FILTER A PROPERTY
// we would just add a method if needed for how a property is checked

/*
 * Hit Level Filter Method
 */
export const filterByHitLevel = {
	key: "hit_level",
	method: (moveHitLevel, hitLevelFilter) => {
		return moveHitLevel === hitLevelFilter;
	}
};

/**
 * Speed Filter Method
 * @param: { min: (int), max: (int) }
 */
export const filterBySpeed = {
	key: "speed",
	method: (moveSpeed, speedFilter) => {
		return moveSpeed >= speedFilter.min && moveSpeed <= speedFilter.max;
	}
};
