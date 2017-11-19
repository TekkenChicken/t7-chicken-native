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
