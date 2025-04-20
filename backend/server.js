require('dotenv').config({ path: '../.env' }); // .env 경로 주의
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});