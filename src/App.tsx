import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Header } from './components/Header'
import { List } from './components/List'
import { useState } from 'react'
import { toDos } from './components/Form'


export function App() {
  const [data, setData] = useState('');

  const [toDoData, setToDoData] = useState<Array<toDos> | toDos[]>([]);
  
  function newToDoChange(text: string) {
    //console.log(`Esse texto está sendo enviado para o App do Header: ${text}`);
    setData(text);
  }

  function newToDo(toDos: Array<toDos> | toDos[]) {
    setToDoData(toDos);
  }

  return (
    <ThemeProvider theme={lightTheme}>

      <DndProvider backend={HTML5Backend}>

        <Header 
          onNewToDo={newToDo}
        />
        <List 
          data={toDoData}
        />
        <GlobalStyle />

      </DndProvider>
    </ThemeProvider>
  )
}

