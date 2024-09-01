import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/core/interfaces/notes.interface';
import { Notes } from 'src/core/schemas/notes.schema';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Notes.name) private notesModel: Model<Notes>) {}

  addNote = async (note: Note) => {
    const newNote = await this.notesModel.insertMany(note);
    return { message: 'note added successfully', data: newNote };
  };

  getAllNotes = async () => {
    const notes = await this.notesModel.find();
    return { message: 'get notes successfully', data: notes };
  };

  getNote = async (id: any) => {
    const note = await this.notesModel.findById(id);
    return { message: 'get note successfully', data: note };
  };

  updateNote = async (note: Note, id: any) => {
    const newNote = await this.notesModel.findByIdAndUpdate(id, note, {
      new: true,
    });
    return { message: 'note updated successfully', data: newNote };
  };

  deleteNote = async (id: any) => {
    const note = await this.notesModel.findByIdAndDelete(id);
    return { message: 'note deleted successfully', data: note };
  };
}
