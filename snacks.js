// snack1
function getInitials(fullName) {
    const [name, surname] = fullName.split(' ').filter(str => str !== '');
    return `${name.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`
}

module.exports = { getInitials };