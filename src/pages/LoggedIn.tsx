import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaCheckCircle} from 'react-icons/fa' 
import { userDetails } from '../store/userStore.ts'
import { useState,type ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

 interface ItemData{
    name: string;
      count: number; 
      price:number
      }

      const itemPrice: Record<string, number>= {
        shirt: 500, 
        trouser: 400,
        kaftan: 1200
      }
function Welcome(){
  const lastname = userDetails((state) => state.user?.lastname);


  const [addItems, setAddItems] = useState<ItemData[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('shirt')
  const [quantity, setQuantity] = useState<number>(0);

  const addQuantity = () => setQuantity(q => q + 1)
  const removeQuantity = ()=> setQuantity(q => q > 0 ? q -1 : 0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const v = parseInt(e.target.value);
     setQuantity(isNaN(v)? 0 : v)
   }
     const handleDropDown = (e: ChangeEvent<HTMLSelectElement>)=> {
    
        setSelectedItem(e.target.value);
      setQuantity(0); 
     };
    const addItem = ()=>{
      if(quantity === 0) return;

      setAddItems(prevItems =>{
         const uniquePrice = itemPrice[selectedItem] || 0
        const itemExists = prevItems.find((Item) => 
          Item.name === selectedItem );

        if(itemExists) 
          return prevItems.map((item) =>
        item.name ===selectedItem ? 
        {...item, count:item.count + quantity, }: item);
        return  [
        ...prevItems, {name: selectedItem,
          count: quantity, price:uniquePrice
        }
      ]
      })
      };
      const deletItem = (itemName: string) => {
        setAddItems((prevItem) => 
          prevItem.filter((item) => item.name !==itemName)
        )
      };const totalQuantity = addItems.reduce((acc, curr) => 
        acc + curr.count, 0); const totalPrice =
         addItems.reduce((acc, curr)=> acc + (curr.count * curr.price), 0
        );

        const currentTime = new Date().getHours();
        const greetings = (currentTime <= 12) ? 'Good morning' :
        (currentTime >= 12 && currentTime <= 16) ? 'Good Afernoon' : 
        'Good Evening'  

  return(
    <>
    <section style={{color:'white'}} className='items'>
    <div className='itemSelector' style={{color: 'white'}}>
      <div>
        <h3>{greetings}</h3>
      <h1>Happy to see you {lastname}</h1>
    <p>What do you have for us today ?</p>
    </div>
      <select onChange={handleDropDown} 
       value= {selectedItem}>
        <option value='shirt'>Shirt</option>
        <option value='trouser'>Trouser</option>
        <option value='kaftan'>Kaftan</option>
      </select>
      <input type='number' 
      onChange={handleChange}
      value={quantity}
      min='0' 
      placeholder='Put everything' name='quantity'/>
      <FaMinus onClick={removeQuantity}
      className='faMinusBtn'/>
      <FaPlus 
      onClick={addQuantity} 
      className="faAddBtn"/>
    </div>
    </section>
    <section style={{color:'white'}}>
      <button onClick={addItem} className='addItembtn'>
        Add item to list
        </button>
        <div className='displayList'>
          {addItems.length > 0 ? (addItems.map((item)=>
             (<div key={item.name} 
             style=
              {{display:'flex',gap:'15px', backgroundColor: 'darkblue', alignItems:'center',
               justifyContent: 'space-between '}}>
              <p>
              Added {item.count}  {item.name}(s) for
               NGN{item.price} each
              </p> 
              <span 
               className='subTotal'>
                (Subtotal: NGN{item.count * item.price})  
              </span>
              <FaTrash
               onClick={() => 
                deletItem(item.name)}
                className='faMinusBtn' />
                </div>
          ))): (<p>No items added yet</p>)
          }
        </div>
       <div className='grandTotal'>
         <span>
                Total Items: {totalQuantity} Total price: 
                {totalPrice}
              </span>
                <span>Yes, this would be all</span>
              <Link to='/payment' >
              <FaCheckCircle style={{fontSize:'35px',
                color:'green', 
              }}/></Link>
       </div>
    </section>
    </>
  )
}

export default Welcome