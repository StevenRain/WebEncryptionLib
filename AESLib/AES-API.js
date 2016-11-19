/**
 * Created by Steven on 2016/11/8.
 */

/*
* 加密函数
* sourceSrting : 待加密的明文
* keyString : 密钥
* */
function Encrypt(sourceString, keyString){

    var str = sourceString;
    var key = keyString;
    var iv = '0123456789ABCDEF';

    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);

    var encrypted = CryptoJS.AES.encrypt(str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // 转换为字符串
    encrypted = encrypted.toString();
    return encrypted;
}


/*
 * 解密函数
 * sourceSrting : 待解密的密文
 * keyString : 密钥
 * */
function Decrypt(sourceString, keyString) {

    var key = keyString;
    var iv = '0123456789ABCDEF';

    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);

    var encrypted = sourceString;

    // mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
    // padding 支持 Pkcs7、AnsiX923、Iso10126
    // 、NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // 转换为 utf8 字符串
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    return decrypted;
}