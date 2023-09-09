const subjectsMiddlewares = {
    isValidAuth: (req, res, next) => {
        try {
            const { auth } = req.query;
            if (!auth || auth !== 'STUDENT' && auth !== 'TEACHER') throw new Error('Bạn không có quyền sử dụng!');
            // code..
            next();
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null
            });
        }
    }
}
export default subjectsMiddlewares;