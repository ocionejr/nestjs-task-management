import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateTaskDto {
  @ApiProperty({ name: 'status', enum: TaskStatus })
  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
