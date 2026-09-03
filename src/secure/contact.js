const decode = (s) =>
  [...s].map((c) => String.fromCharCode(c.charCodeAt(0) - 7)).join('');

const EMAIL = 'hu|zhnovzo@:=Gnthps5jvt';
const PHONE = '2@8>;:@;?9?@?';
const PHONE_DISPLAY = "2@8'>;:@;?9?@?";
const MAILTO = 'thps{vAhu|zhnovzo@:=Gnthps5jvt';
const TEL = '{lsA2@8>;:@;?9?@?';

export const contact = {
  email: () => decode(EMAIL),
  emailHref: () => decode(MAILTO),
  phone: () => decode(PHONE),
  phoneDisplay: () => decode(PHONE_DISPLAY),
  telHref: () => decode(TEL),
  city: 'Kolkata, West Bengal',
  region: 'North 24 Parganas, West Bengal',
};
