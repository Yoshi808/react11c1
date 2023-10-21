import './landing.css';

interface IPropsLan{
    name: string;
    role: string;
    experience: number;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Landing(props: IPropsLan){
    return (
        <div className={ props.count % 2 === 0 ? 'light' : 'dark' }>
            <h2>Name: {props.name}</h2>
            <h3>Role: {props.role}</h3>
            <h4>Experience: {props.experience}</h4>
            <h3>{props.count}</h3>
            <button onClick={ () => {
                props.setCount(props.count+1)
            } }>CLICK IN LANDING</button>
        </div>
    );
}

export default Landing;