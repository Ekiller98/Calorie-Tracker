import { Router } from 'express';

const router = Router();

//Handles HTTP POST requests to /api/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Simulate login logic (this will later connect to a real database)
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // Pretend login was successful
  return res.status(200).json({
    message: 'Login successful!',
    user: { email },
    token: 'fake-jwt-token-for-now'
  });
});

export default router;