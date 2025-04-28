function validateForm() {
  let error = "";

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const dob = document.getElementById("dob").value;

  // Reset messages
  document.getElementById("errorMsg").innerText = "";
  document.getElementById("successMsg").innerText = "";

  // First Name length
  if (firstName.length > 10) {
      error = "First Name must not be more than 10 characters.";
  }
  // Last Name length
  else if (lastName.length > 10) {
      error = "Last Name must not be more than 10 characters.";
  }
  // Password length
  else if (password.length < 6) {
      error = "Password must be at least 6 characters.";
  }
  // Password strength
  else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password)) {
      error = "Password must include uppercase, lowercase, number, and symbol.";
  }
  // Password match
  else if (password !== confirmPassword) {
      error = "Passwords do not match.";
  }

  if (error) {
      document.getElementById("errorMsg").innerText = error;
      return false;
  } else {
      // SAVE DATA INTO LOCAL STORAGE
      const formData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          dob: dob,
          // In real life, never save password in local storage! Here only for assignment
          password: password
      };

      localStorage.setItem('userRegistrationData', JSON.stringify(formData));

      document.getElementById("successMsg").innerText = "✅ Verification Successful and Data Saved!";
      return false; // prevent real submit
  }
}
