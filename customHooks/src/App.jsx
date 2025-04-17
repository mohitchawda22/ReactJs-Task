import useApi from './Usefetch';
import './App.css'


function App() {

  const { data, loading } = useApi("https://jsonplaceholder.typicode.com/posts", 1000)

  return (
    <div>
      {loading && <div>Loading......</div>}
      <ul>
        {data && data.map((item ,index)=><li key={index} className=''><strong>{item.title}</strong></li>)}
      </ul>
      </div>

  )
}


      export default App
