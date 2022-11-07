import React from 'react'
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

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Header />
                <Paper variant='outlined'>
                    <TodoList />
                    <Divider />
                    <AddTodo />
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default App
