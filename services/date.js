export const uniqueDate = (tasks) => {
    const unique = [];
    
    tasks.forEach( task => {
        !unique.includes(task.dateFormat) ? unique.push(task.dateFormat) : '';
    });

    return unique;
};

export const orderDates = (dates) => {
    return dates.sort( (a, b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");

        return firstDate - secondDate;
    });
};