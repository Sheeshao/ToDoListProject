let todoList_data = [];

const user_input_task_field = document.querySelector("#nameTask");
const user_input_date_field = document.querySelector("#duedate");


function get_user_input_task() {
    if (!user_input_date_field.value || !user_input_task_field) {
        return;
    }

    const task = user_input_task_field.value;
    const duedate = user_input_date_field.value;

    todoList_data.push(
        {
            taskName: task,
            due: duedate
        }
    )

    user_input_date_field.value = "";
    user_input_task_field.value = "";

    console.log(todoList_data[0]);
}