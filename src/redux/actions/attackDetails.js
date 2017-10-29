// Action Types
export const SHOW_ATTACK_DETAILS = 'SHOW_ATTACK_DETAILS';
export const PREVIOUS_ATTACK = 'PREVIOUS_ATTACK';
export const NEXT_ATTACK = 'NEXT_ATTACK';

export const showAttackDetails = (move, index) => {
    return {
        type: SHOW_ATTACK_DETAILS,
        payload: {
            move,
            index
        }
    }
}

export const previousAttack = (move, index) => {
    console.log('previous payload move', move)
    return {
        type: PREVIOUS_ATTACK,
        payload: {
            move,
            index
        }
    }
}

export const nextAttack = (move, index) => {
    console.log('next attack move', move)
    return {
        type: NEXT_ATTACK,
        payload: {
            move,
            index
        }
    }
}
