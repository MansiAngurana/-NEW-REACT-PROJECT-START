// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const users=[
//   { 
//         "id": 1,
//         "title": "Essence Mascara Lash Princess",
//         "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//         "category": "beauty",
//         "price": 9.99,
//         "rating": 4.94,
//         "stock": 5,
//         "warrantyInformation": "1 month warranty",
//         "shippingInformation": "Ships in 1 month",
//         "availabilityStatus": "Low Stock",
//         // "tags": [
//         //   "beauty",
//         //   "mascara"
//         // ],
//   },
// {
//   "id": 2,
//   "title": "Essence Mascara Lash Princess",
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "rating": 4.94,
//   "stock": 5,
//   "warrantyInformation": "1 month warranty",
//   "shippingInformation": "Ships in 1 month",
//   "availabilityStatus": "Low Stock",
// },
// {
//   "id": 3,
//   "title": "Essence Mascara Lash Princess",
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "rating": 4.94,
//   "stock": 5,
//   "warrantyInformation": "1 month warranty",
//   "shippingInformation": "Ships in 1 month",
//   "availabilityStatus": "Low Stock",
// }]
//   return (
//     <div className="App">
//      <h1><center>All USERS</center></h1>
//      {users.map((users)=>(
//       <table border="2px">
//      {/* <div className='box1'> */}
//      <p>ID : {users.id},</p>
//      {/* <p>Name : {users.name},</p> */}
//      <p>Tittle : {users.title},</p>
//      <p>DESCRIPTION : {users.description}.</p>
//      <p>CATEGORY : {users.category},</p>
//      <p>PRICE : {users.price},</p>
//      <p>RATING: {users.rating},</p>
//      <p>STOCK : {users.stock},</p>
//      <p>WARRANTYINFORMATION : {users.warrantyInformation},</p>
//      <p>SHIPPINGINFORMATION : {users.shippingInformation},</p>
//      <p>AVAILABILITYSTATUS : {users.availabilityStatus},</p>
//      </table>

//     //  </div>
//      ))}

//     </div>
//   );
// }

// export default App;
import './App.css';

function App() {
  const users = [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "rating": 4.94,
      "stock": 5,
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
    },
    {
      "id": 2,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "rating": 4.94,
      "stock": 5,
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
    },
    {
      "id": 3,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "rating": 4.94,
      "stock": 5,
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
    },
    {
      "id": 4,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "rating": 4.94,
      "stock": 5,
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
    },
    {
      "id": 5,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "rating": 4.94,
      "stock": 5,
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
    }
  ];

  return (
    <div className="App">
      <h1><center>USING PRODUCT"JSON DATA"</center></h1>
      <table className="user-table" border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Warranty Information</th>
            {/* <th>Shipping Information</th> */}
            <th>Availability Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user,index) => (                                                    1st way to show index number of table rows */}
             {users.slice(0,2).map((user,index) => (
              // index % 2 === 1 ? ( 
            <tr >
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>{user.category}</td>
              <td>{user.price}</td>
              <td>{user.rating}</td>
              <td>{user.stock}</td>
              <td>{user.warrantyInformation}</td>
              {/* <td>{user.shippingInformation}</td> */}
              <td>{user.availabilityStatus}</td>
            </tr>
                // ) : null
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

