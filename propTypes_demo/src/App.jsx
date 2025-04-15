import './App.scss'
import Cards from "./components/Cards";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  const productCards = [
    {img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Title: "Card1", Price: "$100", Stocks: 100, buyText: "Buy Now" },
    {img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Title: "Card2", Price: "$200", Stocks: 500, buyText: "Buy Now" },
    {img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww", Title: "Card3", Price: "$700", Stocks: 800, buyText: "Buy Now" },
    {img:"https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Title: "Card4", Price: "$200", Stocks: 200, buyText: "Buy Now" },
    {img:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Title: "Card5", Price: "$300", Stocks: 0, buyText: "Out Of stock" },
    {img:"https://images.unsplash.com/photo-1686831889344-f8cb3a384bc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Title: "Card5", Price: "$300", Stocks: 0, buyText: "Out Of stock" },
  ]
  return (
    <div className='container row'>
      {productCards.map((item,index) => {
        return (
          <Cards Image={item.img}
            Title={item.Title}
            Price={item.Price}
            Stocks={item.Stocks}
            buyText={item.buyText} key={index} />
        )
      })}
    </div>
  );
}

export default App;

