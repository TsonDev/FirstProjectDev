// lấy data from form
const formsigninElement = document.getElementById('formsignin');
const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');
// bắt sự kiện
formsigninElement.addEventListener('submit',function(e){

e.preventDefault();
// validate

//lấy data từ local
const userLocal =JSON.parse(localStorage.getItem('users')) || [] 
let userLocalAd = JSON.parse(localStorage.getItem('usersAd')) || [];
console.log(userLocal)
// find data từ local
const findUser = userLocal.find((user) =>
     user.userName === usernameElement.value
 && user.password === passwordElement.value)
 console.log(findUser)
// xử lí
if(findUser){
     window.location.href='index.html'
}
// find data admin từ local
const findUserAd = userLocalAd.find((user) =>
    user.userName === usernameElement.value
&& user.password === passwordElement.value)
// console.log(findUser)
// xử lí
if(findUserAd){
    window.location.href='admin.html'
}
if(!findUserAd && !findUser){
    alert('Tài khoản mật khẩu không đúng')
}

})



