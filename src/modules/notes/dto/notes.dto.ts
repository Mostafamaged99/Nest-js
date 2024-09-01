import { IsMongoId, IsOptional, MaxLength, MinLength } from 'class-validator';

export class AddNotesDto {
  @MaxLength(50)
  @MinLength(2)
  title: string;
  @MaxLength(5000)
  @MinLength(2)
  content: string;
  @IsMongoId()
  @IsOptional()
  user: string;
}

export class ParamDto {
  @IsMongoId()
  id: string;
}

export class UpdateNotesDto {
  @MaxLength(50)
  @MinLength(2)
  @IsOptional()
  title: string;
  @MaxLength(5000)
  @MinLength(2)
  @IsOptional()
  content: string;
  @IsMongoId()
  @IsOptional()
  user: string;
}
