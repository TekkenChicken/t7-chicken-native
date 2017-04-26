// SPECIFIC CASES FOR HOW WE FILTER A PROPERTY
// we would just add a method if needed for how a property is checked

/*
 * Hit Level Filter Method
 */
export const filterByHitLevel = (moveHitLevel, hitLevelFilter) => {
	return moveHitLevel === hitLevelFilter;
};

/*
 * Speed Filter Method
 */
export const filterBySpeed = (moveSpeed, speedFilter) => {
	return moveSpeed >= speedFilter.min && moveSpeed <= speedFilter.max;
};
