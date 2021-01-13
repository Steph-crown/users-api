// This module accepts 1 variables (a list of previously generated id's) and returns a string id not in the list

module.exports = (idList) => {
    const getRandString = () => {
        return Math.random().toString(36).substring(2, 15);
    }

    let randString = getRandString();
    while(idList.includes(randString)) {
        randString = getRandString()
    }
    return randString;
}