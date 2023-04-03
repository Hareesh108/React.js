import { GetServerSideProps } from "next";

export default function UserInfo(props:{id:string}) {
    return(
        <div>
            <h1>{props.id}</h1>
        </div>
    )
}

export const getServerSideProps:GetServerSideProps = async (context) => {

    console.log(context);

    const {params} = context;

    const userId = params?.id;

    return (
        {
            props: {
                id: "UserID- " + userId,
            }
        }
    )
}