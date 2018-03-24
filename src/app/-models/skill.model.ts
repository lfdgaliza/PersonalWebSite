export class Skill {
    name: string;
    asYouCanSee: boolean = false;

    constructor(name: string, asYouCanSee: boolean = false)
    {
        this.name = name;
        this.asYouCanSee = asYouCanSee;
    }

}