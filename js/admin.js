
function save() {
   
    let fullname =document.getElementById('fullname').value;
    let email =document.getElementById('email').value;
    let phone =document.getElementById('phone').value;
    let address =document.getElementById('address').value;
    let gender =''

    // kiểm tra form

    if(document.getElementById('male').checked){
        gender=document.getElementById('male').value;
    }else if(document.getElementById('female').checked){
        gender=document.getElementById('female').value;
    }
    if(fullname===''){
        fullname=''
       document.getElementById('fullname-error').innerHTML="vui lòng nhập họ và tên!"
    }else{
        document.getElementById('fullname-error').innerHTML=''
    }
    if(fullname && email && phone && address && gender){
      
        let students =localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) :[] 
        students.push({
            fullname: fullname,
            email:email,
            phone:phone,
            address:address,
            gender:gender
        });   
        localStorage.setItem('students',JSON.stringify(students))
        renderListStudent();
       
    }
}
function renderListStudent(){
    let students =localStorage.getItem('students') ?  JSON.parse(localStorage.getItem('students')) :[] 
   
    if(students.length === 0) {
        document.getElementById('list-student').style.display='none';
         return false
    }
    document.getElementById('list-student').style.display='block';
        
       

    let tableContent = ` <tr>
    <td>#</td>
    <td>Họ và tên</td>
    <td>email</td>
    <td>Điện thoại</td>
    <td>Quên quán</td>
    <td>Giới Tính</td>
    <td>Hành động</td>
    </tr>`;
    students.forEach((student, index) => {
        let studentId=index;
        let genderTable=student.gender===1 ? 'Nữ' :'Nam'
        index++;
        tableContent += ` <tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${genderTable}</td>
            <td>
                <a href='#' onclick='deleteStudent()'>Xóa</a> | <a href='#'>Cập nhật</a>
            </td>
        </tr>`;
    });
    document.getElementById('list-students').innerHTML=tableContent;
}
function deleteStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id,1)
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudent();
  
}

// function renderListDeletedStudent(){
//     // Lấy danh sách sinh viên đã xóa từ localStorage
//     let deletedStudents = localStorage.getItem('deletestudents') ? JSON.parse(localStorage.getItem('deletestudents')) : [];

//     // Kiểm tra nếu không có sinh viên nào đã bị xóa
//     if(deletedStudents.length === 0) {
//         document.getElementById('list-student-delete').style.display = 'none';
//         return false;
//     }

//     // Hiển thị bảng nếu có sinh viên đã xóa
//     document.getElementById('list-student-delete').style.display = 'block';

//     // Khởi tạo nội dung bảng
//     let tableContent = ` <tr>
//         <td>#</td>
//         <td>Họ và tên</td>
//         <td>Email</td>
//         <td>Điện thoại</td>
//         <td>Quê quán</td>
//         <td>Giới Tính</td>
//     </tr>`;

//     // Duyệt qua danh sách sinh viên đã xóa và tạo hàng cho bảng
//     deletedStudents.forEach((student, index) => {
//         let genderTable = student.gender === 'female' ? 'Nữ' : 'Nam'; // Hiển thị giới tính chính xác
//         tableContent += ` <tr>
//             <td>${index + 1}</td>
//             <td>${student.fullname}</td>
//             <td>${student.email}</td>
//             <td>${student.phone}</td>
//             <td>${student.address}</td>
//             <td>${genderTable}</td>
//         </tr>`;
//     });

//     // Hiển thị nội dung bảng trong phần tử HTML
//     document.getElementById('list-student-delete').innerHTML = tableContent;
// }
