export const addFeature = x => {
    console.log('addFeature invoked');
    console.log(x);
    return {
        type: 'ADD_FEATURE',
        payload: x
    };
};
export const removeFeature = x => {
    console.log('removeFeature invoked');
    console.log(x);
    return {
        type: 'REMOVE_FEATURE',
        payload: x
    };
};