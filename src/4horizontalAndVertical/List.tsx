import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { mock } from "mockjs";

type Props = {};

function Index({ item, onDrag }: any) {
  console.log("[🚀] ~ data-------item", item);
  return (
    <div>
      拖拽
      <DragDropContext
        onDragEnd={(result) => {
          console.log("[🚀] ~ a,b,c", result);
          let sourceIndex = result.source.index;
          let desIndex = result.destination.index;
          let temp = [...item.data];
          temp.splice(desIndex, 0, ...temp.splice(sourceIndex, 1));
          onDrag(temp, result.source.droppableId);
        }}
      >
        <Droppable droppableId={item.id}>
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
                {item.data.map((item, index) => {
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
                                    padding: "10px 30px",
                                    ...provided.draggableProps.style,
                                  }
                                : {
                                    padding: "10px 30px",
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
