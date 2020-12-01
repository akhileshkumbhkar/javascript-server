let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
export default function ValidateEmail(email) {
    return reg.test(email);
}
   