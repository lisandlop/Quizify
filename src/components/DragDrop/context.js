import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd'

const DragDropContext = React.createContext(null);

export const withDragDrop = Component => props => (
        <DragDropContextProvider backend={HTML5Backend}>
        {dragdrop => <Component {...props} dragdrop={dragdrop} />}
        </DragDropContextProvider>
      );

export default DragDropContext;
