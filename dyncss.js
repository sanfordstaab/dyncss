//
// dyncss.js
//
// 
// Sets or creats a style sheet named idPrefix+StyleSheet and places/replaces the given css into it.
module.exports = function setStyleSheet(idPrefix, css) {
    var id = idPrefix + 'StyleSheet';
    var eStyles = document.getELementById(id);
    var fNew = false;
    if (!eStyles) {
        eStyles = document.createElement('style');
        eStyles.id = id;
        eStyles.type = "text/css";
        fNew = true;
    }
    eStyles.innerHTML = css;
    if (fNew) {
        document.head.appendChild(eStyles);
    }
}
