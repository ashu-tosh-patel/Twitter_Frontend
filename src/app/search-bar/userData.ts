import { tweetData } from "../tweet-component/tweetData";

export interface userData{
    message: any;
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