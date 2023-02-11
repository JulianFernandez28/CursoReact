import React from 'react'

import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

function TaskListComponents(props) {

    const defaultTask = new Task('Example','Default Descripcion',false, LEVELS.NORMAL);

    const changestate = () =>{
        console.log("change state any task")
    }

  return (
    <div>
      <div>
        Your task
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponents

