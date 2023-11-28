import {
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from "../utils/api";

type TodoListProps = {
    todos?: Todo[],
    handleToggleDone: (id: number) => void,
    handleDelete: (id: number) => void,
}

/**
 * Renders and manages the list of todos.
 */
const TodoList: React.FC<TodoListProps> = ({
    todos,
    handleDelete,
    handleToggleDone
}) => (
    <List>
        {todos === undefined ? (
            <Typography align="center">
                Loading...
            </Typography>
        ) : todos.map(t => (
            <ListItem
                key={t.id}
                secondaryAction={
                    <IconButton
                        edge="end"
                        onClick={() => handleDelete(t.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemButton
                    dense
                    onClick={() => handleToggleDone(t.id)}
                >
                    <ListItemIcon>
                        <Checkbox checked={t.done} edge="start" />
                    </ListItemIcon>
                    <ListItemText primary={
                        t.done ? <s>{t.title}</s> : t.title
                    } />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
)

export default TodoList