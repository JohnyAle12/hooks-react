import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

export const TodoApp = () => {

    const {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount,
        todosPendientCount
    } = useTodo();

    return (
        <>
            <div>TodoApp</div>
            <div><small>Total({ todosCount }) Pentientes ({ todosPendientCount })</small> </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar tarea</h4>
                    <TodoForm onNewTodo={handleNewTodo} />
                </div>
            </div>
            
        </>
    );
}
