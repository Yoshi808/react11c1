import './landing.css';

interface IPropsLan{
    name: string;
    role: string;
    experience: number;
}

function Landing(props: IPropsLan){
    return (
        <div className='wrapper'>
            <h2>Name: {props.name}</h2>
            <h3>Role: {props.role}</h3>
            <h4>Experience: {props.experience}</h4>
        </div>
    );
}

export default Landing;