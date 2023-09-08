// import { totalNumber } from "./math.js";

// console.log('Hello my friend');
// const a = 10;
// const b = 11;
// const total = totalNumber(a, b);
// console.log(total);
// bất đồng bộ?
// là sự thực thi 1 đoạn chương trình, trong khi đoạn trương trình khác đang chạy
// các đoạn chương trình sau, mà cần sử dụng kết quả của ctrinh trước,
// đợi câu lệnh trước thực thi xong, thì mới chạy
// async/await
// fetch
// const data = fetch('https://jsonplaceholder.typicode.com/posts').then((value) => {
//     return value.json();
// }).then((rs) => {
//     return rs;
// });
// console.log(data);
// async/await

// try catch
// vấn đề mà trước khi có try catch
// const callApi = async () => {
//     // this
//     const call = await fetch('https://jsonplaceholder.typicode.com/posts').catch((res) => { return res });
//     const data = await call.json();
//     console.log('26', call);
// }
// callApi();
// console.log('29', 'This line code after async!');

// try {
//     const PI = 3.14;
//     if (typeof PI === 'string') {
//         throw new Error('PI có kiểu dữ liệu là string');
//     }
//     console.log(PI);
// } catch (error) {
//     console.log(error.message);
// }


// api là gì -> giao diện lập trình ứng dụng -> là thứ để client giao tiếp với server
// mục tiêu khởi tạo được server -> viết phương thức giao tiếp đầu tiên

// các phương thức làm việc của client với server
// restfulApi
// Get
// base api: http://localhost:3001;

// params: là 1 cách thức truyền dữ liệu qua tham số lên api
// cú pháp, thử làm 1 số api liên quan về params
import express from 'express';
const app = express();

const data = [1, 2, 3, 4, 5];


// viết 1 api sử dụng params là các giá trị index
// http://localhost:3001/data/1 -> lấy data[1]
// http://localhost:3001/data/0 -> lấy data[0]
// viết 1 api cập nhật 1 giá trị được truyền từ params
// http://localhost:3001/data/update/0/100 -> cập nhật giá trị data[0] bằng 1 giá trị mới = 100

app.get('', (req, res) => {
    res.send({
        message: 'Hello client!'
    });
});
app.get('/data', (req, res) => {
    res.send({
        data
    });
});

app.get('/data/getIndex0', (req, res) => {
    const value = data[0];
    res.send({
        data: value
    });
});
app.get('/data/getIndex1', (req, res) => {
    const value = data[1];
    res.send({
        data: value
    });
});

app.listen(3001, () => {
    console.log('server is running!');
});
