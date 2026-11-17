let todoList_data = [];
let display_flagged = 0;


const user_input_task_field = document.querySelector("#nameTask");
const user_input_date_field = document.querySelector("#duedate");
const user_priority_field = document.querySelector(".user_priority_task_button");

document.querySelector(".js-add-todolist")
    .addEventListener('click', () => {
        get_user_input_task();
    });



function get_user_input_task() {
    display_flagged = 0;

    if (!user_input_date_field.value || !user_input_task_field.value) {
        return;
    }

    const task = user_input_task_field.value;
    const duedate = user_input_date_field.value;
    const priority = user_priority_field.value;

    todoList_data.push(
        {
            //task: task,
            //duedate: duedate,
            //priority: priority
            //make sure same name of value and propr.

            task,
            duedate,
            priority
        }
    )

    display_added_task();

    user_input_date_field.value = "";
    user_input_task_field.value = "";
    user_priority_field.value = "HIGH";

    //console.log(todoList_data);
}

function display_added_task() {
    let temp_storage = '';

    todoList_data.forEach((list_object, index) => {
        //const list_object = todoList_data[index];
        //console.log(`${list_object[index]} and ${index}`)
        //console.log(todoList_data)
        //console.log(`List object test: ${list_object}`)
        const { task, duedate, priority } = list_object;
        const information = `
            
                <div class = display_generated_task>
                    <span>${task}</span>
                    <span>${duedate}</span>
                    <span>${priority}</span>
                        <button class = "js-delete-button"
                        ">DELETE</button>
                </div>
            
        `
        temp_storage += information


    });
    document.querySelector(".display_user_task").innerHTML = temp_storage;

    document.querySelectorAll('.js-delete-button')
        .forEach((deletebutton, index) => {
            deletebutton.addEventListener('click', () => {
                todoList_data.splice(index, 1);
                display_added_task();
            });
        });

}

let priority_data = [];
let temp_priority_storage = "";



document.querySelectorAll('.filter_button')
    .forEach((filterbutton) => {
        filterbutton.addEventListener('click', () => {
            const priorityTag = filterbutton.textContent; //e.g (medium)

            priority_data = todoList_data.filter((value) => {
                if (value.priority === priorityTag) { //med = med => return value then display
                    console.log(value) //testing
                    return value;
                    
                }
                else
                {
                    return;
                }
            })
            display_priority_tag();
        })
    })
/*

if (display_flagged === 0) {
                    if (value.priority === priorityTag) {
                        priority_data.push(value)
                       
                        display_flagged = 1;
                    }
                    
                }
*/


//task: task,
//due: duedate,
//priority: priority
//make sure same name of value and propr.



function display_priority_tag() {
    document.querySelector(".display_user_task").innerHTML = "";

    priority_data.forEach((objectPriority) => {
        const info = `
            <div class= display_generated_task>
                <span>${objectPriority.task}</span>
                <span>${objectPriority.duedate}</span>
                <span>${objectPriority.priority}</span>
            </div >
            `
        temp_priority_storage += info;
        // working console.log(`${ objectPriority.task } and ${ objectPriority.duedate } and ${ objectPriority.priority } `);
    });
    document.querySelector(".display_user_task").innerHTML += temp_priority_storage;
    temp_priority_storage = "";

}

