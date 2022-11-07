import {
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * Renders and manages the list of todos.
 */
const TodoList = () => {

    return (
        <List>
            <ListItem
                key={0}
                secondaryAction={
                    <IconButton edge="end">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemButton dense>
                    <ListItemIcon>
                        <Checkbox checked={false} edge="start" />
                    </ListItemIcon>
                    <ListItemText primary="Studying for the exam of prof. Amoretti" />
                </ListItemButton>
            </ListItem>
            <ListItem
                key={1}
                secondaryAction={
                    <IconButton edge="end">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemButton dense>
                    <ListItemIcon>
                        <Checkbox checked={false} edge="start" />
                    </ListItemIcon>
                    <ListItemText primary="Buy eggs" />
                </ListItemButton>
            </ListItem>
            <ListItem
                key={2}
                secondaryAction={
                    <IconButton edge="end">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemButton dense>
                    <ListItemIcon>
                        <Checkbox checked={true} edge="start" />
                    </ListItemIcon>
                    <ListItemText primary={
                        <s>Read React documentation</s>
                    } />
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default TodoList