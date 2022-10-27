export const firstName = "ilham";
export const middleName = "nur";
export const lastName = "utomo";

export function fullName() {
    console.info(`${firstName} ${middleName} ${lastName}`);
}

export class Age {

    constructor(name) {
        this.name = name;
    }

    ageNow(born) {
        let currentTime = new Date();
        let year = currentTime.getFullYear();

        let urAge = year - born;
        console.info(urAge);
    }
}

