const app = require('./src/app');
const config = require('./src/config/app.config');

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`LR Foundation Server đang chạy tại: http://localhost:${PORT}`);
  console.log(`Môi trường: ${config.env}`);
});
