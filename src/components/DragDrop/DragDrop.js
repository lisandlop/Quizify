import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const quizSource = {
    beginDrag(props) {
        return props.quiz
    },
    endDrag(props, monitor, component) {
        return props.hanldeDrop(props.quiz.id);
    }
}

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }
  }

class DragDrop extends Component {
    constructor(){

    }

    beginDrag(props, monitor, component) {
        const quiz = {props}
        return quiz
    };
};


export default DragSource("form", quizSource, collect)(DragDrop)
