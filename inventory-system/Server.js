
import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'admin' },
  { id: 2, username: 'user2', password: 'password2', role: 'user' },
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, user: { id: user.id, username: user.username, role: user.role } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
