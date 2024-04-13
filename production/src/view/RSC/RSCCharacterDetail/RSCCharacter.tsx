import { CharacterDetailTemplate } from "@/components/layout/characterDetailTemplate/characterDetailTemplate"

interface props {
    id: string
}

export const RSCCharacter = async (props: props) => {
    //ここを書いてもらう
    return (
        <>
            <div>{props.id}</div>
            <CharacterDetailTemplate />
        </>
    )
}
