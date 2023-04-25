// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [name, setName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [userList, setUserList] = useState([]);
 
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//          setUserList([...userList, { name, mobileNumber, email }]);
//       alert("registration successful");
  
//     setName('');
//     setMobileNumber('');
//     setEmail('');
  
//   };
  
//   const handleName = (event)=>{
//     setName(event.target.value)
  
      
//     }
   
  
 
//    const handleMobileNumber = (event)=>{
//     setMobileNumber(event.target.value)
//    }

//    const handleEmail = (event)=>{
//     setEmail(event.target.value)
//    }

// const nameError="only 3-16 alphabets";
// const  mobileError="only 10 digits";
// const  emailError="invalid email";

// const [focused,setfocused]= useState(false);
// const handleFocus = (Event) =>{
//   setfocused(true);
// };
//   return (
//     <div className="App">
      
   
//       <div className="left-block">
        
//         <h2>List of All Submitted Information</h2>
      
//         <ul >
//                  {userList.map((user) => (
//             <li className='list'>
//               Name: {user.name} <br/>
             
//               Mobile Number: {user.mobileNumber}<br/>
              
//               Email: {user.email}<br/>
              
//               <hr/> 
//             </li>
             
//           ))}
          
//         </ul>
      
//       </div>
//        <div className="right-block">
//         <h1>Enter Details</h1>
//         <form onSubmit={handleSubmit} >
//          <table>
//           <tr>
//            <th> Name:</th>
           
//             <input type="text" 
//                placeholder= 'Enter Name' 
//                value={name}
//                required
//               pattern="^[A-Za-z]{3,16}$"
//                onChange={handleName}
//                onBlur={handleFocus}
//                focused = {focused.toString()} 
//                />
//             <span className='errormsg'>{nameError}</span>
//             </tr> 
//             <tr>
//             <th> Mobile_Number:</th>
//             <input type="text"
//                placeholder="Enter Number" 
//                value={mobileNumber} 
//                required 
//                pattern ="^[0-9]{10}$"
//                onChange={handleMobileNumber} 
//                onBlur={handleFocus}
//                 focused = {focused.toString()}
//               />
//             <span className='errormsg'>{mobileError}</span>
//             </tr>
            
//             <tr>
//          <th> Email id:</th>
//             <input type="email" 
//                placeholder='Enter Email id'  
//                value={email} 
//                required 
//                pattern= "/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+)*$/"
//                onChange={handleEmail}
//                onBlur={handleFocus}
//                focused = {focused.toString()} 
//               />
//             <span className='errormsg'>{emailError}</span>
//             </tr>
            
            
//            <tr className='trs'> 
//            <td colSpan={4}>
//          <input className='submit' type="submit" name='submit'></input>
//          </td></tr>
//           </table> 
//         </form>
        
//       </div>
  
//   </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userList, setUserList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex === -1) {
      setUserList([...userList, { name, mobileNumber, email }]);
      alert("Registration successful");
    } else {
      const updatedUserList = [...userList];
      updatedUserList[editingIndex] = { name, mobileNumber, email };
      setUserList(updatedUserList);
      setEditingIndex(-1);
      alert("Edit successful");
    }
    setName('');
    setMobileNumber('');
    setEmail('');
  };

  const handleEdit = (index) => {
    const { name, mobileNumber, email } = userList[index];
    setName(name);
    setMobileNumber(mobileNumber);
    setEmail(email);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUserList = [...userList];
    updatedUserList.splice(index, 1);
    setUserList(updatedUserList);
    alert("Delete successful");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const nameError = "Only 3-16 alphabets";
  const mobileError = "Only 10 digits";
  const emailError = "...@gmail.com";

  const [focused, setFocused] = useState(false);
  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className="App">
      <div className="left-block">
        <h2>List of All Submitted Information</h2>
        <ul>
          {userList.map((user, index) => (
            <li className="list" key={index}>
              
                 Name: {user.name}
                 <br/>
                 Mobile Number: {user.mobileNumber}
              <br />
                 Email: {user.email}
              <br />
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <div className="right-block">
        <h1>Enter Details</h1>
        <form onSubmit={handleSubmit}>
          <table>
            
              <tr>
                <th>Name:</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                     required
                    pattern="^[A-Za-z]{3,16}$"
                    onChange={handleName}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                  />
                  <span className="errormsg">{nameError}</span>
                </td>
              </tr>
              <tr>
                <th>Mobile_Number:</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    value={mobileNumber} 
                       required 
                    pattern ="^[0-9]{10}$"
                    onChange={handleMobileNumber} 
                    onBlur={handleFocus}
                    focused = {focused.toString()}
                 />
                    <span className='errormsg'>{mobileError}</span>
                                
                </td>
                </tr>
                                
                <tr>
                 <th> Email id:</th>
                   <td>
                     <input type="email" 
                       placeholder='Enter Email id'  
                       value={email} 
                          required 
                       pattern= "/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+*$/"
                       onChange={handleEmail}
                       onBlur={handleFocus}
                       focused = {focused.toString()} 
                      />
                      <span className='errormsg'>{emailError}</span>
                    </td>
                </tr>
                                
                                
                <tr className='trs'> 
                  <td colSpan={4}>
                    <input className='submit' type="Submit" name='submit'></input>
                  </td>
                </tr>
              </table> 
            </form>
                            
          </div>
                      
         </div>
      );
    }
                    
   export default App;
