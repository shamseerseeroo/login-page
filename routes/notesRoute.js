const express = require('express');
const notesRoutes = express.Router();
const notesController = require('../controllers/notesController') 


notesRoutes.post('/addNotes', notesController.notedAdd)
notesRoutes.get('/getAllNotes',notesController.getAllNotes)
notesRoutes.put('/editNote/:id',notesController.updateNote)
notesRoutes.delete('/deleteNote/:id',notesController.deleteNote)

module.exports = notesRoutes;
