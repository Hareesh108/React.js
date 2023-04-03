import { GetServerSideProps } from 'next';

type Name = {
    name: string;
}

export default function UserInfo(props:{name:string}) {
    return (
        <div>
            <h1>User Info</h1>
            <h2>Username: {props.name}</h2>
        </div>
    );
    
}

export const getServerSideProps:GetServerSideProps = async (context) => {

    console.log(context);
    

    const {params, req, res} = context;

    console.log(req);
    console.log(res);

    console.log("Server side request");
    

    return (
        {
            props: {
                name: "Harry"
            }
        }
    )
}