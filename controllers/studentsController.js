const service = require("../services/studentsService");

const getAll = (req, res) => {
  res.json(service.getAllStudents());
};

const getOne = (req, res) => {
  const student = service.getStudentById(req.params.id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
};

const create = (req, res) => {
  const newStudent = service.createStudent(req.body);
  res.status(201).json(newStudent);
};

const update = (req, res) => {
  const updated = service.updateStudent(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Student not found" });
  res.json(updated);
};

const remove = (req, res) => {
  const deleted = service.deleteStudent(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Student not found" });
  res.json({ message: "Student deleted", student: deleted });
};

module.exports = { getAll, getOne, create, update, remove };