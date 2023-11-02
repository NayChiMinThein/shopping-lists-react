import './eventLists.css'

export default function EventLists({lists, handleDelete}) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list, index) => (
            <tr key={list.id}>
              <td>{index + 1}</td>
              <td>{list.item}</td>
              <td>{list.quantity}</td>
              <td><i onClick={() => handleDelete(list.id)} className="fa-regular fa-trash-can delIcon"></i></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
