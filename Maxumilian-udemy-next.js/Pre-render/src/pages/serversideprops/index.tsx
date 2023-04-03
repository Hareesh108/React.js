import Link from "next/link";

type Name = {
    name: string;
}

export default function UserInfo(props:Name) {

    return (
        <div>
            <h1>User Info</h1>
            <h2>Username: {props.name}</h2>

            <Link href={'./serversideprops/dynamic'} >ServerDynamic</Link>
        </div>
    );
    
}

export const getServerSideProps = async () => {
    
    return (
        {
            props: {
                name: "Harry"
            }
        }
    )
}