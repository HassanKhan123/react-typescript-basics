import React from 'react';

const EventComponent: React.FC = () => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('dragging');
  };

  return (
    <div>
      <input onChange={changeHandler} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
