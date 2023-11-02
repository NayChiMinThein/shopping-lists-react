import { useState } from "react"

export default function AddItemsForm({addItems}) {
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState('')

  const resetForm = () => {
    setItem('')
    setQuantity('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const list = {
      item: item,
      quantity: quantity,
      id: Math.floor(Math.random() * 3000)
    }

    console.log(list);
    addItems(list)
    resetForm()
  }

  return (
    <form className='' onSubmit={handleSubmit}>
        <label className='form-label float-start ms-1'>Add New Item</label>
        <input type='text' className='form-control mb-3 py-2' onChange={(e) => setItem(e.target.value)} value={item}/>

        <label className='form-label float-start ms-1'>Add Quantity</label>
        <input type='number' className='form-control py-2' onChange={(e => setQuantity(e.target.value))} value={quantity}/>

        <button className='btn btn-success w-100 mt-4'>Add</button>
    </form>
  )
}
