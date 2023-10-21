interface IProps{
    children: any;
}

function Container(props: IProps) {
  return (
    <>
        {props.children}
    </>
  )
}

export default Container