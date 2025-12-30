module.exports = (err, req, res, next) => {
    console.error('Error:', err.message);
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Đã xảy ra lỗi hệ thống';

    res.status(statusCode).send(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lỗi - ${statusCode}</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                h1 { color: #B12029; }
                a { color: #2A7050; text-decoration: none; }
                pre { text-align: left; background: #f5f5f5; padding: 20px; border-radius: 5px; overflow: auto; }
            </style>
        </head>
        <body>
            <h1>Lỗi ${statusCode}</h1>
            <p>${message}</p>
            ${process.env.NODE_ENV === 'development' ? `<pre>${err.stack}</pre>` : ''}
            <p><a href="/">Về trang chủ</a></p>
        </body>
        </html>
    `);
};
