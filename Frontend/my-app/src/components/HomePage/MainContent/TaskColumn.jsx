import React from 'react';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';

function TaskColumn({ columnId, title, icon, tasks }) {
  const { setNodeRef } = useDroppable({ id: columnId });

  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" ref={setNodeRef}>
      <div className="flex flex-col max-md:mt-8">
        <div className="flex gap-4 justify-between text-xl text-neutral-600">
          <div>{title}</div>
          <img src={icon} className="shrink-0 w-6 aspect-square" alt="" />
        </div>
        <TaskCard tasks={tasks} />
        <div className="flex gap-5 justify-between p-2 mt-4 text-base rounded-lg text-neutral-200 bg-black">
          <a href="/CreateTask" className='my-auto'>Add new</a>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c20818b71c3ce13c107f381418c54401b26dade9d40bd9796094949a1bc97820?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833" className="shrink-0 w-6 aspect-square" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;
