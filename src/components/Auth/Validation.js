const validation = (number) => {
    if (!isNaN(number))
        return true;
    else return false;
}

export { validation };