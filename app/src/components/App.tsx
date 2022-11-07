import {
    Container,
    createTheme,
    CssBaseline,
    Divider,
    Paper,
    ThemeProvider
} from "@mui/material"
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import ErrorBoundary from "../utils/errors"
import { useState, useEffect } from "react"
import { Todo, getTodos } from "../utils/api"

/**
 * Root component of the application.
 */
const App = () => {
    const theme = createTheme({
        palette: {
            background: {
                default: '#eee',
            },
            mode: "light",
        },
    })

    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() => {
        getTodos().then(v => {
            setTodos(v)
        })
    }, [])

    const handleAdd = (title: string) => {
        setTodos(list => list === undefined ? undefined : [
            ...list,
            {
                done: false,
                id: Math.max(...list.map(t => t.id)) + 1,
                title,
            }
        ])
    }

    const handleToggleDone = (id: number) => {
        setTodos(list => list?.map(t => t.id === id ? {
            ...t, done: !t.done,
        } : t))
    }

    const handleDelete = (id: number) => {
        setTodos(list => list?.filter(t => t.id !== id))
    }

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Header />
                    <Paper variant='outlined'>
                        <TodoList
                            todos={todos}
                            handleDelete={handleDelete}
                            handleToggleDone={handleToggleDone}
                        />
                        <Divider />
                        <AddTodo handleAdd={handleAdd} />
                    </Paper>
                </Container>
            </ThemeProvider>
        </ErrorBoundary>
    )
}

export default App
