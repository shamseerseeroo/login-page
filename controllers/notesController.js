const notesModel = require('../models/notesModel');

exports.notedAdd = async (req, res) => {
    try {
        const{ noteTitle,  noteDescription} = req.body;
        const noteData = await notesModel.create({
			noteTitle,
			noteDescription,
		});
        if (noteData) {
			return res.json({ message: ' note added success...!' }).status(200);
		}
		res.json({ message: 'Error in Note Add...!' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
};

exports.getAllNotes = async (req, res) => {
    try {
        const notesData = await  notesModel.find()
        if (notesData) {
			return res.json(notesData).status(200);
		}
		res.json({ message: 'Error in get note...!' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
}

exports.updateNote = async (req, res) => {
    try {
        const{ noteTitle,  noteDescription} = req.body;
        const{ id} = req.params;
        const noteData = await notesModel.updateOne({_id:id},{
            $set:{
                noteTitle,
                noteDescription,
            },
		});
        if (noteData) {
			return res.json({ message: ' note update success...!' }).status(200);
		}
		res.json({ message: 'Error in Note update...!' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
};


exports.deleteNote = async (req, res) => {
    try {
        const{ id} = req.params;
        const noteData = await notesModel.findByIdAndRemove(id);
        if (noteData) {
			return res.json({ message: ' note delete success...!' }).status(200);
		}
		res.json({ message: 'Error in Note delete...!' }).status(400);
    } catch (error) {
        if (error) {
            throw error;
        }
        res.json({ msg: 'server Error'}).status(500);
    }
};

