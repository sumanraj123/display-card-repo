import Pricecard from './pricecard';
import './App.css';
function App()
{ let priceDetails = [
  { plan: "FREE", price: 0,  period : 'month',currency : "$",members: "Single User", storage: "5GB", domain: "Free Subdomain" },
  { plan: "PLUS", price: 9, period : 'month',currency : "$", members: "5 Users", storage: "50GB", domain: "Free Subdomain" },
  { plan: "PRO", price: 49, period : 'month', currency : "$",members: "Unlimited Users", storage: "150GB", domain: "Unlimited Free Subdomains" }
]


  return (
  
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {
         priceDetails.map((price,index)=>{
           return <Pricecard key={index} details={price}></Pricecard>
         })

         
        }
      </div>
    </div>
  </section>
  
  
  )
}export default App;