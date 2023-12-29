
// import React, { useState } from 'react';
// import { MDBContainer } from 'mdb-react-ui-kit';
// import Appname from './Components/Appname';
// import Item from './Components/Item';
// import Todoitems from './Components/Todoitems';
// import WelcomeMessage from './Components/WelcomeMessage';


// const App = () => {
//   const initialtodo=[

// ]

// const[todoitems,settodoitems]=useState([])


// const handlenewitem=(itemname,itemdate)=>{
//   console.log(`item name ${itemname} and ${itemdate}`)
//   const newTodoitem=[...todoitems,{name:itemname,date:itemdate}]
//   settodoitems(newTodoitem)
  
// }

// const handleDelete=(todoItemname)=>{
//   console.log(`handle delete ${todoItemname}`)
// }
//   return (
//    <>
//       <center className='todo-containere'>
//     <div className='container text-center'>
//     <Appname onnewitem={handlenewitem}/>
// {todoitems.length===0 && <WelcomeMessage/>}
// <Todoitems todoitems={todoitems} onDeleteClick={handleDelete}/>





// </div>





//   </center>

//    </>
 


//   )
// }

// export default App






import React, { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Appname from './Components/Appname';
import Item from './Components/Item';
import Todoitems from './Components/Todoitems';
import WelcomeMessage from './Components/WelcomeMessage';

const App = () => {
  const [todoitems, setTodoItems] = useState([]);

  const handlenewitem = (itemname, itemdate) => {
    console.log(`item name ${itemname} and ${itemdate}`);
    const newTodoitem = { name: itemname, date: itemdate };
    setTodoItems([...todoitems, newTodoitem]);
  };

  const handleDelete = (todoItemname) => {
    const newTodoitem=todoitems.filter(item=>item.name!==todoItemname)
    setTodoItems(newTodoitem)
    
    console.log(`handle delete ${todoItemname}`);
    // Implement the logic to delete the item from todoitems state
  };

  return (
    <>
      <center className='todo-container'>
        <div className='container text-center'>
          <Appname onnewitem={handlenewitem} />
          {todoitems.length === 0 && <WelcomeMessage />}
          <Todoitems todoitems={todoitems} onDeleteClick={handleDelete} />
          
        </div>
      </center>
    </>
  );
};

export default App;
