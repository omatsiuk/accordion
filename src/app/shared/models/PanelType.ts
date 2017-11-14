export interface IPipe {
    title: string;
    id?: number;
}
export const PANELTYPES: IPipe[] = [
    {title: 'Properties'},
    {title: 'Discussion'},
    {title: 'Attachments'},
    {title: 'Relationship'},
    {title: 'Files'},
    {title: 'History'}
];
/*
export enum PanelType {
    Properties,
    Discussion,
    Attachments,
    Relationship,
    Files,
    History
}
*/
