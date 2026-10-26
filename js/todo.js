let todoList_data = [];

const user_input_task_field = document.querySelector("#nameTask");
const user_input_date_field = document.querySelector("#duedate");
const display_field_task = document.querySelector(".display_user_task");


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

    display_added_task();

    user_input_date_field.value = "";
    user_input_task_field.value = "";

    console.log(todoList_data);
}

function display_added_task() {
    let temp_storage = '';

    for (let i = 0; i < todoList_data.length; i++) {
        const list_object = todoList_data[i];
        //console.log(`List object test: ${list_object}`)

        const { taskName, due } = list_object;
        const information = `
            <p>
                <span>${taskName}</span>
                <span>${due}</span>
                    <button onclick = "
                        todoList_data.splice(${i}, 1);
                        display_added_task();
                    ">DELETE</button>
            </p>
        `
        temp_storage += information
    }
    document.querySelector(".display_user_task").innerHTML = temp_storage;
}