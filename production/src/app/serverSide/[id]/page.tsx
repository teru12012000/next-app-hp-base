import { RSCCharacter } from "@/view/RSC/RSCCharacterDetail"

interface props {
    id: string
}

/*export const generateStaticParams = async () => {
    //ここの部分を書きましょう
}*/

//ここの部分もちょろっと
const ClientCharacter = ({ params }: { params: props }) => {
    return <RSCCharacter id={params.id} />
}

export default ClientCharacter
