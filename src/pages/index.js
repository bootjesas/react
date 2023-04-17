import Hello from '@/components/Hello'


export default function Home() {
  const names =['bo', 'sofie', 'sandrine', 'lore']
  const nameElenement=names.map(name => {
    return(<Hello name= {name} key={name} />)
    });

  
  return (
   <div>

    {nameElenement}
   </div>
    
  )
}
