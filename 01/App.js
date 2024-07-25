function abcd(variable) {
    if (typeof variable === 'number') {
        variable.toFixed(2);
    }
    else if (typeof variable === 'string') {
        variable.toLowerCase();
    }
}
abcd(12);
