/**
 * Created by Steven on 2016/11/5.
 */

/* publicKey : RSA加密的公钥
 * */

var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMOprWQoMSYraGc9qQYsHxfc0Pia3HOE9zglKq+mgwUNaJ0CG8LEfupnnKun5hyZWb/4fjlQkvmh2XnUJI4ZO3ZKJTtZHBedH5GX2W11AYDqAID94rqwMM+vhoUUq6TSuxzkk/S0Kk05UabAb3/kQ0iZFcAIoGsonCxos4d1PsFwIDAQAB";

/*
*  input : 待加密的字符串
*  output : 加密后的字符串
* */
function encrypt(originalString){

    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(originalString);

}
