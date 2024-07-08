// EJERCICIO 5 SLOT MACHINE
export class SlotMachine {

    #coins;

    constructor() {
        this.#coins = 0;
    }

    #randomBoolean = () => {
        return Math.random() < 0.5;
    } 

    play = () => {
        this.#coins++;
        const slot1 = this.#randomBoolean();
        const slot2 = this.#randomBoolean();
        const slot3 = this.#randomBoolean();    
        console.log(`${slot1} - ${slot2} - ${slot3}`);

        if (slot1 === slot2 && slot2 === slot3) {
            console.log(`Congratulations!!!. You won ${this.#coins} coins!!`);
            this.#coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }

}