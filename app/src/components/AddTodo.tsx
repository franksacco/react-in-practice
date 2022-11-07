import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"

/**
 * Renders and manages the form for a todo item addition.
 */
const AddTodo = () => {
    const [title, setTitle] = useState('')

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
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs="auto">
                    <Button
                        disableElevation
                        type="submit"
                        variant="contained"
                    >Add</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default AddTodo