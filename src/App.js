

function App() {
  return (
    <>
    <div className="container mx-auto p-5 ">
      <div className="flex justify-between">
      <div>
      <img className="h-5" src="../w.png" alt=""/>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white lg:hidden md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
     <div className="lg:flex md:flex space-x-5 hidden text-white font-bold">
       <p className="cursor-pointer">HOME</p>
       <p className="cursor-pointer">ABOUT</p>
       <p className="cursor-pointer">REGISTER</p>
       <p className="cursor-pointer">CONTACT</p>
     </div>
      </div>
      <div  className="flex   justify-center items-center h-[540px]">
        <div>
         
          <div className=" py-2  text-white flex items-center shadow-[0_0px_5px_5px_rgba(0,0,0,0.3)] w-[350px] rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6   w-6 mx-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
             <input className="bg-transparent outline-none w-full font-bold placeholder-white " placeholder="User Name"/>
             </div>
          <div className=" text-white flex items-center shadow-[0_0px_5px_5px_rgba(0,0,0,0.3)] mt-5 w-[350px] py-2 rounded-full"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
</svg>
            <input className="bg-transparent outline-none w-full font-bold placeholder-white" placeholder="Password"/>
            </div>
          <div className="  mt-4 bg-red-500   w-[350px] py-2 rounded-full"> 
         
            <button className=" w-full text-white font-bold">GET STARTED</button>
            </div>
          
        </div>
      </div>
     <div className="flex space-x-4 font-bold  h-16 items-end justify-center md:justify-start lg:justify-start text-white ">
       <p className="cursor-pointer">About Us</p>
       <p className="cursor-pointer">Privacy Policy</p>
       <p className="cursor-pointer">Terms Of Use</p>
     </div>
    </div>
    </>
  );
}

export default App;
