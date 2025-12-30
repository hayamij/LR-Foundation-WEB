module.exports = (req, res, next) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Không tìm thấy trang</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                h1 { color: #ec1313; }
                a { color: #ec1313; text-decoration: none; }
            </style>
        </head>
        <body>
            <h1>404 - Không tìm thấy trang</h1>
            <p>Xin lỗi, trang bạn tìm kiếm không tồn tại.</p>
            <p>URL: ${req.originalUrl}</p>
            <p><a href="/">Về trang chủ</a></p>
        </body>
        </html>
    `);
};
