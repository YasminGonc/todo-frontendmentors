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
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme(theme.title == 'light' ? darkTheme : lightTheme)
  }

  const [toDoData, setToDoData] = useState<toDos[]>([]);

  function newToDo(toDos: toDos) {
    setToDoData(state => [...state, toDos]);
  }

  return (
    <ThemeProvider theme={theme}>

      <DndProvider backend={HTML5Backend}>

        <Header 
          onNewToDo={newToDo}
          onToggleTheme={toggleTheme}
        />
        <List 
          data={toDoData}
        />
        <GlobalStyle />

      </DndProvider>
    </ThemeProvider>
  )
}

