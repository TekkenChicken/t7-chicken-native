// SPECIFIC CASES FOR HOW WE FILTER A PROPERTY
// we would just add a method if needed for how a property is checked

/*
 * Hit Level Filter Method
 */
export const filterByHitLevelOrCrush = {
	key: "hit_level",
	method: (moveHitLevel, valueFilter) => {
		return moveHitLevel.includes(valueFilter);
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

export const filterByBlockProp = {
	key: "on_block",
	method: (moveFrames, filterProp) => {
		console.log(filterProp);
		if(filterProp == 'safe') {
			return moveFrames >= -9;
		} else if(filterProp == 'punishable') {
			return moveFrames <= -10;
		} else if(filterProp == 'plus') {
			return moveFrames.includes('+');
		} else if(filterProp == 'negative') {
			return moveFrames.includes('-');
		} else if(filterProp == 'oc') {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
		}
	}
}

export const filterByHitProp = {
	key: "on_hit",
	method: (moveFrames, filterProp) => {
		console.log(filterProp);
		if(filterProp == 'plus') {
			return moveFrames.includes('+');
		} else if(filterProp == 'negative') {
			return moveFrames.includes('-');
		} else if(filterProp == 'knd') {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
		} else if(filterProp == 'launch' ) {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
 	  } else if(filterProp == 'oc') {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
		} else if(filterProp == 'CS') {
			return moveFrames.includes('CS')
		}
	}
}

export const filterByCHProp = {
	key: "on_ch",
	method: (moveFrames, filterProp) => {
		if(filterProp == 'plus') {
			return moveFrames.includes('+');
		} else if(filterProp == 'negative') {
			return moveFrames.includes('-');
		} else if(filterProp == 'knd') {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
		} else if(filterProp == 'launch' ) {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
 	  } else if(filterProp == 'oc') {
			return moveFrames.replace(/\s/g, '').toLowerCase().includes(filterProp);
		} else if(filterProp == 'CS') {
			return moveFrames.includes('CS')
		}
	}
}
