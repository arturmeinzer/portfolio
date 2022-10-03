import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItemText from "@mui/material/ListItemText";
import { ListItem, ListItemAvatar } from "@mui/material";

const DraggableList = ({ items, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId="droppable-list">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item, index) => (
                            <Draggable key={item} draggableId={item} index={index}>
                                {(providedSub, snapshot) => (
                                    <ListItem
                                        ref={providedSub.innerRef}
                                        {...providedSub.draggableProps}
                                        {...providedSub.dragHandleProps}
                                        className=""
                                    >
                                        <ListItemAvatar>
                                            Test
                                        </ListItemAvatar>
                                        <ListItemText primary={item.primary} secondary={item.secondary} />
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
};

DraggableList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDragEnd: PropTypes.func.isRequired,
};

export default DraggableList;
