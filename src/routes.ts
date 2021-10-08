import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Dani"
    });

    CreateCourseService.execute({
        name: "A",
        educator: "Cayo"
    });

    return response.send();
}