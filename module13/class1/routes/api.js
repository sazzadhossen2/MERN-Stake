import express from 'express';
import { addTask, deleteTask, readTask, updateTask } from '../controller/task.js';

const router = express.Router();


router.get('/tasks',readTask)
router.post('/tasks/create',addTask)
router.put('/tasks/update',updateTask)
router.delete('/tasks/delete',deleteTask)

export default router;