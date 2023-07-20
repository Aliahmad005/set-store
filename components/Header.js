'use client';
import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import { Ri24HoursFill, RiShoppingBag2Line, RiUser6Fill } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const [cartL , setCartL] = useState([]);
  const [cartt , setCartt] = useState(0);
let cartData = useSelector( (store)=>  store.productSection.cartList)
let userid = useSelector(function(store){ return store.productSection.userlog;});
 

useEffect(()=>{
  setCartL(cartData)
},[cart])

useEffect(()=>{
  setCartt(cartL.length)
},[cartL])

  const router = useRouter();
   
  function nav (){
    router.push(`/cdliverd`)

   }
   function navt (){
    router.push(`/cpending`)

   }
   function navL (){
    router.push(`/login`)

   }
    function navA (){
    router.push(`/admino`)

   }
   function home (){
    router.push(`/home`)

   }
    function brand (){
    router.push(`/adidas/Addidas`)

   }

   function brandt (){
    router.push(`/adidas/Nike`)

   }
   function brandth (){
    router.push(`/adidas/Service`)

   }
   function brandf (){
    router.push(`/adidas/Bata`)

   }
   function cart (){
    router.push(`/cart`)

   }





  return (
    <Navbar collapseOnSelect expand="lg" className="hshawdow">
    <Container>
      <Navbar.Brand onClick={home}>
      <Image className='m-auto'
          src="/addidas.jpg"
          width={70}
          height={70}
          alt="Picture of the author"
        />
      </Navbar.Brand>

      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      { userid._id != undefined ?
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='font-semibold'  onClick={nav} >Completed Orders</Nav.Link>
          <Nav.Link  onClick={navt}  >Pending Orders</Nav.Link>
          <NavDropdown title="Brands" id="collasible-nav-dropdown" >
            <NavDropdown.Item onClick={brand}>Addidas</NavDropdown.Item>
            <NavDropdown.Item onClick={brandt}>
              Nike
            </NavDropdown.Item>
            <NavDropdown.Item onClick={brandth}>Service</NavDropdown.Item>
          
            <NavDropdown.Item onClick={brandf}>
              Bata
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>

          <Nav.Link eventKey={2} href="#memes">
            
         < RiUser6Fill className='text-xl'/>
          </Nav.Link>

          <Nav.Link eventKey={2} onClick={cart}>
         < RiShoppingBag2Line  className='text-xl'/>
          </Nav.Link>
          {cartt != 0 ?
           
           <p className='text-xs p-0 rounded-full text-white m-0 bg-red-500 text-center font-semibold w-[12px] h-[12px]'>1</p>
         :''
         }
        </Nav>
      </Navbar.Collapse>  : 
      

      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='font-semibold'  onClick={navL} >Log in</Nav.Link>
        <Nav.Link  onClick={navA}  >Admin panel</Nav.Link>
       
      </Nav>
    
    </Navbar.Collapse>

     }
    </Container>
  </Navbar>
  )
}

export default Header