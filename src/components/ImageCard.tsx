
interface Props {
    image?: JSX.Element
}

const ImageCard = (props: Props) => {
  return (
    <div className='w-full h-auto object-cover'>
         {props.image}
    </div>
  )
}

export default ImageCard