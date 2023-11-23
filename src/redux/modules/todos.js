import uuid from uuid

const initialState = [
    {
        id: uuid(),
        title: "글제목1",
        contents: "글내용1",
        isDone: true,
    },
    {
        id: uuid(),
        title: "글제목2",
        contents: "글내용2",
        isDone: true,
    },
    {
        id: uuid(),
        title: "글제목3",
        contents: "글내용3",
        isDone: false,
    },
]

export default initialState;