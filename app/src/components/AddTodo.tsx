import { Button, Grid, TextField } from "@mui/material"

/**
 * Renders and manages th form for a todo item addition.
 */
const AddTodo = () => {
    const handleSubmit: React.FormEventHandler = e => {
        e.preventDefault()
        // ...
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                alignItems="center"
                container
                spacing={2}
                sx={{ p: 2 }}
            >
                <Grid item xs>
                    <TextField
                        fullWidth
                        label="Title"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs="auto">
                    <Button
                        type="submit"
                        variant="contained"
                    >Add</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddTodo