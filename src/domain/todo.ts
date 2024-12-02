export class Todo {
        constructor(
                public id: string,
                public title: string,
                public done: boolean,
                public created_at: string,
        // この中カッコにコンストラクタの本体が入る
        ) {}
}