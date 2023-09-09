import express from 'express';
import RootRouter from './routes/index.js';

const app = express();

// middlewares: giúp kiểm tra, lọc dữ liệu đầu vào, cho phép đi tiếp hoặc không

// thực hiện viết 1 API, /subjects
// trả ra kết quả là 1 danh sách các môn học
// subjectName, resource, author, course, AVG (điểm trung bình)
// kiểm tra người dùng nào đang muốn dùng API này, thì phải gửi lên req
// có 1 query params: auth: STUDENT, TEACHER,
// không thuộc vào 1 trong 2 auth phía trên, thì k cho phép xem dữ liệu

export const listSubject = [
    {
        id: 1,
        subjectName: 'Toán',
        resourse: 'NXB Kim Đồng',
        course: 'KTN',
        avg: 8.2
    },
    {
        id: 2,
        subjectName: 'Vật lý',
        resourse: 'NXB Kim Đồng',
        course: 'KTN',
        avg: 6.9
    },
    {
        id: 3,
        subjectName: 'Hoá học',
        resourse: 'NXB Kim Đồng',
        course: 'KTN',
        avg: 7.0
    }
];

// api/v1/subjects
app.use('/api/v1', RootRouter);

app.listen(8888, () => {
    console.log('The server is running!');
});