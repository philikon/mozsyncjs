define("web-util", ["exports"], function (exports) {

  exports.stringToHex = function stringToHex(str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
      var num = str.charCodeAt(i);
      var hex = num.toString(16);
      if (hex.length == 1) {
        hex = '0' + hex;
      }
      ret += hex;
    }
    return ret;
  };

  exports.hexToString = function hexToString(hex) {
    var ret = '';
    if (hex.length % 2 != 0) {
      return false; // TODO should throw here
    }

    for (var i = 0; i < hex.length; i += 2) {
      var cur = hex[i] + hex[i + 1];
      ret += String.fromCharCode(parseInt(cur, 16));
    }
    return ret;
  };

  exports.intsToString = function intsToString(arr) {
    var ret = '';
    for (var i = 0; i < arr.length; i++) {
      ret += String.fromCharCode(arr[i]);
    }
    return ret;
  };

  exports.stringToInts = function stringToInts(str) {
    var ret = [];
    for (var i = 0; i < str.length; i++) {
      ret[i] = str.charCodeAt(i);
    }
    return ret;
  };

  //TODO Math.random is not proper PRNG
  exports.generateRandomBytes = function generateRandomBytes(length) {
    var ret = "";
    for (var i = 0; i < length; i++) {
      // Generates uniformly distributed random integer between 0 and 255
      ret += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return ret;
  };

  var base64Key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  exports.encodeBase64 = function encodeBase64(input) {
    var i = 0;
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output += base64Key.charAt(enc1) + base64Key.charAt(enc2)
              + base64Key.charAt(enc3) + base64Key.charAt(enc4);
    }

    return output;
  };

  exports.decodeBase64 = function decodeBase64(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = base64Key.indexOf(input.charAt(i++));
      enc2 = base64Key.indexOf(input.charAt(i++));
      enc3 = base64Key.indexOf(input.charAt(i++));
      enc4 = base64Key.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    return output;
  };

});
