function phone(phoneNumber) {
  const removeNonDigits = () => phoneNumber.replace(/\D+/g, '')

  const ruPhoneRegexp = /^(?<code>7|8)(?<number>9?\d{9}$)/;
  const anyPhoneRegexp = /^(?<code>\d{1,4})(?<number>\d{10}$)/
  if (ruPhoneRegexp.test(removeNonDigits())) {
    let groups = removeNonDigits().match(ruPhoneRegexp).groups;
    let phone = '+7'+groups.number
    return phone
  } else {
    let groups = removeNonDigits().match(anyPhoneRegexp).groups;
    let phone = `+${groups.code}`+groups.number;
    return phone
  }
}







const isMobilePhone = (str) => mobilePhoneRegexp.test(removeNonDigits(str))

console.log(phone('8 (927) 000-00-00'))
console.log(phone('+7 960 000 00 00'))
console.log(phone('+86 000 000 0000'))
// console.log(removeNonDigits('8 (927) 000-00-00'))