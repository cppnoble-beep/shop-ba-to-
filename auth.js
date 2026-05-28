const adminUser = {
  email: 'admin@masarapbato?.com',
  password: 'admin123'
};

function loginAdmin(email, password) {
  if(email === adminUser.email && password === adminUser.password) {
    localStorage.setItem('adminLoggedIn', 'true');
    window.location.href = 'admin.html';
  } else {
    alert('Invalid admin credentials');
  }
}

function logoutAdmin() {
  localStorage.removeItem('adminLoggedIn');
  window.location.href = 'index.html';
}
