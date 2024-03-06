import { TaskStatus } from "../task.entity"
import { IsNotEmpty, IsOptional, IsString, MinLength, IsIn, IsEnum } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: String

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus. PENDING ,TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus
}