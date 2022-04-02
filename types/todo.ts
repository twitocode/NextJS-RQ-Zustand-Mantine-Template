import { User } from "./user";

export interface Todo {
	completed: boolean;
	name: string;
	content: string;
	labels: string[];
	lists: string[];
	user: User;
	dueDate: string;
	_id: string;
}

export interface CreateTodoDTO extends Partial<Todo> {
	name: string;
}

export interface LabelDTO {
	id: string;
	labels: string[];
}

export interface ListDTO {
	id: string;
	labels: string[];
}

export interface SetStatusDTO {
	id: string;
	status: boolean;
}
