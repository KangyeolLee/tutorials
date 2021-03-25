import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosActions = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
