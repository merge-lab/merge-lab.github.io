function unobfuscate(divID, text) {
	document.getElementById(divID).innerHTML = rot13(text);
}

// https://stackoverflow.com/questions/40746282/rot13-cipher-in-as-few-lines-of-code-possible
function rot13(txt) {
    return txt.replace(/[a-z]/gi, c =>
        "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
      [ "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] );
}