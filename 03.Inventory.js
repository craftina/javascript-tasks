function inventory(array) {
    let items = array.shift().split(', ');
    let commands = array;

    while (commands[0] !== 'Craft!') {
        [command, item] = commands[0].split(' - ');

        if (command == 'Collect' && !items.includes(item)) {
            items.push(item);
        }
        if (command == 'Drop' && items.includes(item)) {
            const index = items.indexOf(item);
            items.splice(index, 1);
        }
        if (command == 'Combine Items') {
            [oldItem, newItem] = item.split(':');
            if (items.includes(oldItem)) {
                const index = items.indexOf(oldItem);
                items.splice(index + 1, 0, newItem);
            }
        }
        if (command == 'Renew' && items.includes(item)) {
            const index = items.indexOf(item);
            items.splice(index, 1);
            items.push(item);
        }
        commands.shift();

    }
    console.log(items.join(', '));
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])