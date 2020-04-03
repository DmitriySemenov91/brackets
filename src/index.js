module.exports = function check(str, bracketsConfig) {
  let bracketsConfigSize = bracketsConfig.length;

    for (let i = 0; i < bracketsConfigSize;) {

        let find = str.includes(bracketsConfig[i].join(''));

        if (find) {
            str = str.replace(/\S./g, '');
            i = 0;
        } else {
            i++;
        }
    }
    return str === '';
}
