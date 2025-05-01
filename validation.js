function validateName(name) {
  return /^[a-zA-Z]{2,}$/.test(name);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePasswordMatch(pass1, pass2) {
  return pass1 === pass2 && pass1.length >= 6;
}

function validateDOB(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  return !isNaN(birthDate) && birthDate < today;
}