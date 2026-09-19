interface Props {
    title: string
}

export const MyTitle = ( {title}: Props ) => {
  console.log('MyTitle re-render')
  
    return <h1 className="text-4xl">{title}</h1>
}
