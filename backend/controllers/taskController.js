const asyncHandler = require('express-async-handler');
const Task = require('../models/Task');

// @desc Get all tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, category, priority, status } = req.query;

  const filter = { user: req.user.id };
  if (category) filter.category = category;
  if (priority) filter.priority = priority;
  if (status === 'completed') filter.completed = true;
  if (status === 'pending') filter.completed = false;

  const tasks = await Task.find(filter)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const count = await Task.countDocuments(filter);

  res.json({
    tasks,
    totalPages: Math.ceil(count / limit),
    currentPage: parseInt(page),
  });
});

// @desc Create new task
// @route POST /api/tasks
// @access Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, priority, dueDate } = req.body;

  if (!title) {
    res.status(400);
    throw new Error('Please add a task title');
  }

  const task = await Task.create({
    user: req.user.id,
    title,
    description,
    priority,
    dueDate,
  });

  res.status(201).json(task);
});

// @desc Update a task
// @route PUT /api/tasks/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the task user
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

// @desc Delete a task
// @route DELETE /api/tasks/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error('Task not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the task user
  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await task.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};