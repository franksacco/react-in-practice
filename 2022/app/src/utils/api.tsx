/**
 * Returns the provided value with a given delay. 
 * @param ms Duration of the delay.
 * @param value The value to be returned.
 * @returns A promise.
 */
function delay<V>(ms: number, value: V) {
    return new Promise<V>(resolve => setTimeout(resolve, ms, value));
}

export type Todo = {
    done: boolean,
    id: number,
    title: string,
}

const TODOS: Todo[] = [
    {
        done: false,
        id: 0,
        title: 'Studying for the exam of prof. Amoretti',
    }, {
        done: false,
        id: 1,
        title: 'Buy eggs',
    }, {
        done: true,
        id: 2,
        title: 'Read React documentation',
    }
]

/**
 * Returns a fake list of todo items.
 */
export const getTodos = () => {
    return delay(1000, TODOS)
}
