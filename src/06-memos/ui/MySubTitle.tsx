interface Props {
    subTitle: string
}

export const MySubTitle = ( {subTitle}: Props) => {

  console.log('MySubTitle re-render')

  return (
    <>
        <h6 className="text-2xl">{subTitle}</h6>

        <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">Llamar funcion</button>
    </>
  )
}
