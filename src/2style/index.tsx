import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { mock } from "mockjs";

let mockData = mock({
  "arr|10": [
    {
      name: "@name",
      id: "@id",
    },
  ],
});
// console.log("[🚀] ~ data", mockData);

type Props = {};

function Index({}: Props) {
  const [data, setData] = useState(mockData.arr);
  console.log("[🚀] ~ data", data);
  return (
    <div>
      拖拽
      <DragDropContext
        onDragEnd={(result) => {
          console.log("[🚀] ~ a,b,c", result);
          let sourceIndex = result.source.index;
          let desIndex = result.destination.index;
          let temp = [...data];
          temp.splice(desIndex, 0, ...temp.splice(sourceIndex, 1));
          setData(temp);
        }}
      >
        <Droppable droppableId="ida">
          {(provide, snapshot) => {
            return (
              <div
                ref={provide.innerRef}
                {...provide.droppableProps}
                style={
                  snapshot.isDraggingOver
                    ? {
                        border: "1px solid #ccc",
                      }
                    : {}
                }
              >
                {data.map((item, index) => {
                  return (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {(provided, snap) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={
                              snap.isDragging
                                ? {
                                    border: "1px solid #994444",
                                    ...provided.draggableProps.style,
                                  }
                                : {
                                    ...provided.draggableProps.style,
                                  }
                            }
                          >
                            {item.name}
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provide.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Index;
