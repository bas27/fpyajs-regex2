export default function phone(phoneNumber) {
  const removeNonDigits = () => phoneNumber.replace(/\D+/g, '');

  const ruPhoneRegexp = /^(?<code>7|8)(?<number>9?\d{9}$)/;
  const anyPhoneRegexp = /^(?<code>\d{1,4})(?<number>\d{10}$)/;
  if (ruPhoneRegexp.test(removeNonDigits())) {
    const { groups } = removeNonDigits().match(ruPhoneRegexp);
    return `+7${groups.number}`;
  }
  const { groups } = removeNonDigits().match(anyPhoneRegexp);
  return `+${groups.code}${groups.number}`;
}
