import { Collection } from "mongodb";
import { getDb } from "../db";
import { Workout } from "@/models/workout";


export async function getWorkOutCollection():Promise<Collection<Workout>>{
    const db = await getDb("zenithzoi");
    return db.collection<Workout>("workouts");
}