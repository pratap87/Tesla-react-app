export const increment = (mr) => {
    return {
        type: 'INCREMENT',
        payload: mr
    };
};
export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};