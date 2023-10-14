function muOnline(rooms) {
    let health = 100;
    let chest = 0;
    roomsArray = rooms.split('|');

    for (let i = 0; i < roomsArray.length; i++) {
        const [command, number] = roomsArray[i].split(' ');
        let amount = Number(number);

        if (command == 'potion') {
            if (health < 100) {
                if (health + amount <= 100) {
                    health += amount;
                } else {
                    amount = health + amount - 100;
                    health = 100;
                }
                console.log(`You healed for ${amount} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            chest += amount;
            console.log(`You found ${amount} bitcoins.`);
        } else {
            if (health - amount > 0) {
                health -= amount;
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }

        if (i === roomsArray.length - 1 && health > 0) {
            console.log(`You've made it!\nBitcoins: ${chest}\nHealth: ${health}`);
        }
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');