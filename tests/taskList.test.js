const TaskList = require('../lib/taskList.js');
const TaskListItem = require('../lib/taskListItem.js');

describe('TaskList', () => {
    test('should render ul with tasks', () => {
        const taskItems = [
            new TaskListItem('task 1'),
            new TaskListItem('task 2'),
            new TaskListItem('task 3'),
        ];
        const expectedHtml = [
            '<ul class="tasks">',
            '<li class="task-item">task 1</li>',
            '<li class="task-item">task 2</li>',
            '<li class="task-item">task 3</li>',
            '</ul>'
        ].join('');
        const list = new TaskList(taskItems);
        expect(list.render()).toEqual(expectedHtml);
    });
});
