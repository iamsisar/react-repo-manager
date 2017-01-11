function parseNameToSlug(str) {
    let output = str
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        .substr(0,20);

    if (output.substr(-1) === '-') {
        return output.substr(0,output.length-1)
    }

    return output
}


export {parseNameToSlug};