import './App.css'
import ListCard from './components/ListCard'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import useApi from './Usefetch'


function App() {
  const { data } = useApi("https://jsonplaceholder.typicode.com/posts",10)
  console.log(data);
  
  return (
    <>

    <div className='row'>
      <h1 className=''>Custom Hooks Api Fetch:</h1>
    {data?.loading && <div className=''>Loading......</div>}
    {data && data?.data?.map((data,index)=>{
      return (
        <div className='col-lg-3'>
          <ListCard title={data?.title} body={data?.body} key={index}/>
        </div>
      )
    })}
    </div>
    </>
  )
}

export default App
