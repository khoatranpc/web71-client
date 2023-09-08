import express from 'express';
const app = express();

app.use(express.json());

const data = [10, 23, 55, 29, 63, 99, 2, 4, 1, 6, 7];
// 0, 1, -1, 2, 001, 
// NaN -> false
// null -> false
// undefined -> false

// http://localhost:50001/data/1
// app.get('/data/:index', (req, res) => {
//     const { index } = req.params;
//     if (typeof Number(index) !== 'number' || (!Number(index) && index != 0)) {
//         res.send({
//             message: 'Thất bại, index cần phải là 1 số!'
//         })
//     } else {
//         res.send({
//             message: 'Thành công!',
//             data: typeof data[index] === 'number' ? data[index] : null
//         })
//     }
// });
// app.get('/data/update/:index/:newValue', (req, res) => {
//     const { index, newValue } = req.params;
//     if (!index || !newValue) {
//         res.send({
//             message: 'Lỗi, bạn thiếu vị trí (index) hoặc giá trị mới (newValue)'
//         });
//     } else {
//         if (typeof data[index] === 'number') {
//             data[index] = Number(newValue);
//             res.send({
//                 message: 'Cập nhật thành công!',
//                 data: data
//             })
//         }
//     }
// });

app.get('/data', (req, res) => {
    // option: lt10, gt10, all
    const { option } = req.query;
    // http://localhost:5001/data?option=LT10
    switch (option) {
        case 'LT10':
            res.send({
                message: 'Thành công!',
                data: data.filter(item => item < 10)
            });
            break;
        case 'GT10':
            res.send({
                message: 'Thành công!',
                data: data.filter(item => item > 10)
            });
            break;
        default:
            res.send({
                message: 'Thành công!',
                data: data
            });
            break;
    }
});
app.post('/data', (req, res) => {
    const { newValue } = req.body;
    if (!newValue) {
        res.send({
            message: 'Thất bại! Bạn chưa cung cấp giá trị mới (newValue)',
        });
    } else {
        data.push(newValue);
        res.send({
            message: 'Thành công!',
            newValue
        });
    }
});

// put, delete
// user :{id, userName, age, address, phoneNumber, gender, country}
// đối với api get all,  truyền lên query params 1 key tên là fields: id,userName,age
app.listen(5001, () => {
    console.log(`Server's running!`);
})