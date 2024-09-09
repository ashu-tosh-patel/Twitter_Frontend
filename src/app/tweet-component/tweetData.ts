export interface tweetData{
    id: number,
    userId: number,
    message: string,
    media: object,
    createdAt: string,
    hashtags: string[],
    mentions: string[],
    urls: string[]
}