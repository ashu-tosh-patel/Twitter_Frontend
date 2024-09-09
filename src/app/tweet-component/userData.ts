import { tweetData } from "./tweetData";

export interface userData{
    id: number,
    name: string,
    username: string,
    email: string,
    password: string,
    profilePic: string,
    coverPic: string,
    bio: string,
    location: string,
    tweetDTOs: tweetData[]
}