//use
//useState/useEffect
//JSX RETURN NOT
//lOGIC RESUSE KE SAKTE HAI

// import useFetch from "./useFetch";

// function App(){
//   const users = useFetch("https://jsonplaceholder.typicode.com/users");

//   return(
//     <div>
//       <h2>User List</h2>
//       {
//         users.map(user => (
//           <p key={user.id}>{user.name}</p>
//         ))
//       }
//     </div>
//   )
// }
// export default App;

import Card from "./Card";

function App(){
  return(
    <Card>
      <h2>React Course</h2>
      <p>Lerninbg Children Props</p>
    </Card>
  )
}

export default App