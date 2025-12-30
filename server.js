const app = require('./src/app');
const config = require('./src/config/app.config');

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`\x1b[32m✔ LR Foundation Server running at: http://localhost:${PORT}\x1b[0m`);
});
