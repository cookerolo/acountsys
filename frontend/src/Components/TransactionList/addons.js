function stringToDate(fecha) {
    return (new Date(Date.parse(fecha))).toLocaleString();
}

export { stringToDate }

