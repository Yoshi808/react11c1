import './card.css'

interface IProps{
    title: string;
    age: number;
}

function Card(props: IProps) {
  return (
    <div className="wrapper">
        <h2>Card header: {props.title}</h2>
        <h4>Card content</h4>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default Card