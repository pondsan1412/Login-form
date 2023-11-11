function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        alert('เข้าสู่ระบบสำเร็จ');
        
    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
}
