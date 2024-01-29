export type FileType = {
    is(is: any): void;
    id: string;
    fullname: string;
    filename: string;
    fileName: string;
    timestamp: Date;
    downloadURL: string;
    type: string;
    size: number;
}