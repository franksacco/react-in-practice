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
        <ErrorBoundary>
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
        </ErrorBoundary>
    )
}

export default App
