export interface Set {
    setNumber:number;
    reps:number;
    weight?:number;
}

export interface Exercise {
    name:string;
    sets:Set[];
    notes?:string;
}

export interface Workout{
    _id?:string;
    userId:string;
    date:string;
    exercises:Exercise [];
    notes?:string;
    createdAt:Date;
}