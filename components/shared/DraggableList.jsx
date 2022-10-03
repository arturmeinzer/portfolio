import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ListItem } from "@mui/material";

const DraggableList = ({ items, onDragEnd }) => (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
            {(provided) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    {items.map((item, index) => (
                        <Draggable key={item} draggableId={item} index={index}>
                            {(providedSub) => (
                                <ListItem
                                    ref={providedSub.innerRef}
                                    {...providedSub.draggableProps}
                                    {...providedSub.dragHandleProps}
                                    className=""
                                >
                                    Test
                                    {/* <DevIcon>{item}</DevIcon> */}
                                </ListItem>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>
);

DraggableList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDragEnd: PropTypes.func.isRequired,
};

export default DraggableList;
