
import { toast, ToastContainer } from "react-toastify"

 
 export const LeftSide=()=>{
    return(
        <>
         <div style={{flex:"5", paddingLeft:"10px", paddingRight:"10px", height:"100%", border:"1px solid red" ,width:"60%" ,paddingTop:"90px"}}>
        
                 <h1>Payment Information</h1>
                 <div style={{display:"flex",justifyContent:"space-between" ,marginBottom:"10px"}}>
                     <button style={{width:"50%" ,height:"40px" , border:"none",borderRight:"none" ,backgroundColor:"#0070eb" , color:"white", fontWeight:"normal" , fontSize:"15px" , fontFamily:"sans-serif"}}>Credit Card</button>
                     <button  style={{width:"50%" ,height:"40px" ,border:"1px solid gray" ,backgroundColor:"white"}}>Paypal</button>

                 </div>
                 <div style={{display:"flex",justifyContent:"space-between" ,marginBottom:"10px"}}>
                     <div><label htmlFor="" style={{fontFamily:"sans-serif" ,fontSize:"16px",}}>Card number</label><br />
                     <input type="text" placeholder="Enter 16 digit card number" style={{width:"200px" ,height:"32px"}}/>
                     </div>
                     <div><label htmlFor="" style={{fontFamily:"sans-serif" ,fontSize:"16px",}}>Expire on</label><br />
                     <input type="text" placeholder=" MM/YY " style={{width:"200px" ,height:"32px"}}/>
                     </div>
                     <div><label htmlFor="" style={{fontFamily:"sans-serif" ,fontSize:"16px",}}>Securtiy Code</label><br />
                     <input type="text" placeholder="security code    " style={{width:"200px" ,height:"32px"}}/>
                     </div>
                     <div><label htmlFor="" style={{fontFamily:"sans-serif" ,fontSize:"16px",}}>Postal code</label><br />
                     <input type="text" placeholder="postal code" style={{width:"200px" ,height:"32px"}}/>
                     </div>

                 </div>
                <input type="checkbox" /> <label htmlFor="" style={{fontFamily:"sans-serif" ,fontSize:"15px",}}>Save credit card</label>
                <h2 style={{marginBottom:"5px"}}>Donate the change</h2>
                <input type="checkbox" /> <label htmlFor="" style={{fontFamily:"sans-serif" ,fontSize:"15px",}}>Donate $0.02 to Grubhub Community Fund to support Ukraine. By checking this box you agree to the Donate the Change Terms of Use.</label><br />
                <button  onClick={()=>{
                     toast.success("Your order is placed",{position:"top-center"})
                }} style={{width:"100%",height:"6%" ,marginTop:"10px", backgroundColor:"#13aa37" ,color:"white" , border:"none" , borderRadeius:"10px"}}>Place your order </button>
               
         </div>
         <ToastContainer/>
        </>
    )
}

