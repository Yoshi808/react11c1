interface IProps{
    children: JSX.Element;
}

function Container(props: IProps) {
  return (
    <>
        {props.children}
    </>
  )
}

export default Container
