### 基本使用

1. DragDropContext 包裹内容
2. Droppable

   - 要传入一个 droppableId="ida"
   - children 是一个函数

   ```js
   {
     (provide) => {
       return <div ref={provide.innerRef} {...provide.droppableProps}></div>;
     };
   }
   ```

3. Draggable

   - 要传入 draggableId={item.id} index={index}
   - children 是一个函数

   ```js
   {
     (provide) => {
       return (
         <div
           ref={provide.innerRef}
           {...provide.droppableProps}
           {...provided.dragHandleProps}
         ></div>
       );
     };
   }
   ```
