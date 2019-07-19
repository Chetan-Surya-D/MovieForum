export interface comments{
    username: string;
    comment: string;
}

export interface movie{
    name: string;
    genre: string;
    tlink: string;
    ilink: string;
    description: string;
    comments: comments;
}