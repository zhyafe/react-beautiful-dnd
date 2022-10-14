### 样式设置

传入的 children 函数 第二个参数里面有判断是否正在拖动的参数，可以进行样式设置

1. Droppable 有 snapshot.isDraggingOver 判断拖动的元素是否在 Droppable 上

2. Draggable

- 有 snapshot.isDragging 可以判断是否拖动
- Draggable 自定义样式时要加入 provided.draggableProps.style 的原始样式
