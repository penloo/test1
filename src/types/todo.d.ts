interface ITOdoItemContent {
    content: string;
}

interface ITodoItem extends ITOdoItemContent {
    id: string;
    complete: boolean;
    editing: boolean;
}
