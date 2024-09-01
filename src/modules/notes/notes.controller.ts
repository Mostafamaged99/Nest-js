import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AddNotesDto, ParamDto, UpdateNotesDto } from './dto/notes.dto';
import { NotesService } from './notes.service';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
  constructor(private _NotesService: NotesService) {}
  @Post()
  addNote(@Body() note: AddNotesDto, @Req() request: any) {
    note.user = request.user.userId;
    return this._NotesService.addNote(note);
  }

  @Get()
  getNotes() {
    return this._NotesService.getAllNotes();
  }

  @Get('/:id')
  getNote(@Param() param: ParamDto) {
    return this._NotesService.getNote(param.id);
  }

  @Delete('/:id')
  deleteNote(@Param() param: ParamDto) {
    return this._NotesService.deleteNote(param.id);
  }

  @Put('/:id')
  updateNote(@Param() param: ParamDto, @Body() note: UpdateNotesDto) {
    return this._NotesService.updateNote(note, param.id);
  }
}
