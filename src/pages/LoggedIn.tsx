//import {Link} from 'react-router-dom'
import { userDetails } from '../store/userStore.ts'
import { useState,type ChangeEvent } from 'react'

 interface ItemData{
    name: string;
      count: number; 
      //price:{
        //shirt:number,trouser: number,kaftan:number
      //};
 }
function Welcome(){
  const lastname = userDetails((state) => state.user?.lastname);

  //const [price, setPrice] = useState<number>(0)
  const [addItems, setAddItems] = useState<ItemData[]>([])
  const [selectedItem, setSelectedItem] = useState<string>('Shirt')
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
      setAddItems(prevItems =>{
        const itemExists = prevItems.find((Item) => 
          Item.name === selectedItem );
        if(itemExists) 
          return prevItems.map((item) =>
        item.name ===selectedItem ? 
        {...item, count:item.count + quantity}: item);
        return  [
        ...prevItems, {name: selectedItem,
          count: quantity
        }
      ]
      })
      };
      const deletItem = (itemName: string) => {
        setAddItems((prevItem) => 
          prevItem.filter((item) => item.name !==itemName)
        )
      }

  return(
    <>
    <section style={{color:'white'}} className='items'>
    <div className='itemSelector' style={{color: 'white'}}>
      <div>
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
      <button onClick={removeQuantity}>Reduce</button>
      <button onClick={addQuantity}>Increase</button>
    </div>
    </section>
    <section style={{color:'white'}}>
      <button onClick={addItem} className='addItembtn'>
        Add item to list
        </button>
        <div className='displayList'>
          {addItems.length > 0 ? (addItems.map((item, index)=>
             (<div key={index}>
              <p>
              Added {item.count}  {item.name}
              </p> 
              <button onClick={() => 
                deletItem(item.name)}>Remove Item</button>
                </div>
          ))): (<p>No items added yet</p>)
          }
        </div>
    </section>
    </>
  )
}

export default Welcome