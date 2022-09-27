import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Header } from './components/Header'
import { List } from './components/List'
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

  function deleteToDo(toDoToDelete: string) {
    const toDoWithoutDeletedOne = toDoData.filter(toDo => toDo.id != toDoToDelete);
    setToDoData(toDoWithoutDeletedOne);
  }

  function handleDoneToDos(checked: boolean | 'indeterminate', toDoId: toDos['id'], toDoChecked: toDos['checked']) {
    if(checked) {
      const doneToDos = toDoData.map(toDo => {return toDo.id == toDoId ? {...toDo, checked: !toDo.checked} : {...toDo, checked: toDo.checked}});

      setToDoData(doneToDos);
    }

    if (!checked && toDoChecked) {
      const changeDoneToDos = toDoData.map(toDo => {return toDo.id == toDoId ? {...toDo, checked: !toDo.checked} : {...toDo, checked: toDo.checked}});

      setToDoData(changeDoneToDos);
    }
  }

  function filterToDosByCompletedOnes() {
    const completedToDos = toDoData.filter(toDo => toDo.checked);

    setToDoData(completedToDos); //pensar em mudar pq fazendo isso eu altero o estado do todoData
     //pensar em mudar pq fazendo isso eu altero o estado do todoData
  }

  function filterToDosByActiveOnes() {
    const activeToDos = toDoData.filter(toDo => !toDo.checked);

    setToDoData(activeToDos);

    //setToDoData((state) => state.filter(toDo => !toDo.checked)); //pensar em mudar pq fazendo isso eu altero o estado do todoData
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
          onDeleteToDo={deleteToDo}
          onHandleDoneToDos={handleDoneToDos}
          onFilterToDosByCompletedOnes={filterToDosByCompletedOnes}
          onfilterToDosByActiveOnes={filterToDosByActiveOnes}
        />
        <GlobalStyle />

      </DndProvider>
    </ThemeProvider>
  );
}

