import React ,{useState,useEffect}from 'react'
import { data } from "react-router-dom";

export default function Crud() {
    const [user,setUser]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then((data)=>{
            setUser(data);

        })
    },[])



    //Add Button Functionality
    const AddItem=()=>{
        const trimmedName=name.trim();
        const trimmedEmail=email.trim();
        if(name&&email){
            fetch("https://jsonplaceholder.typicode.com/users",{
                method:"POST",
                body:JSON.stringify({
                    name:trimmedName,
                    email:trimmedEmail,
                }),
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                },
            })
            .then((res)=>res.json())
            .then((data)=>{
                const newUser={...data,id:user.length+1};
                setUser([...user,newUser]);
            });
        }
    };




    // Delete Button Functionality
    const DeleteItem=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE",

        })
        .then((res)=>{
            res.json();
        })
        .then((data)=>{
            setUser((user)=>{
                return user.filter((item)=>item.id!==id);
            });
        });

    };


    //Edit Button Functionality
    const EditItem=(id)=>{
        const trimmedName=name.trim();
        const trimmedEmail=email.trim();
        if(name&&email){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
                method:"PUT",
                body:JSON.stringify({
                    name:trimmedName,
                    email:trimmedEmail,
                }),
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                },
            })
            .then((res)=>res.json())
            .then((data)=>{
                setUser((user)=>{
                    return user.map((item)=>{
                        if(item.id===id){
                            return {...item,name:trimmedName,email:trimmedEmail};
                        }
                        return item;
                    });
                });
            });
        }
    }

  return (
    <div>
      <h1 style={styles.h1}>CRUD Operations</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={styles.table}>
        <thead style={styles.th}>
            <tr style={styles.td}>
                <th >ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {user.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><button onClick={()=>EditItem(item.id)} style={styles.button}>Edit</button></td>
                    <td><button onClick={()=>DeleteItem(item.id)} style={styles.button}>Delete</button></td>
                </tr>
            ))}
            <tr>
                <td><input  type="text" value={name} onChange={(e)=>setName(e.target.value)} style={styles.input}/></td>
                <td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={styles.input}/></td>
                <td><button onClick={AddItem} style={styles.button}>Add</button></td>
                
            </tr>
        </tbody>
      </table>
    </div>
  )
}

//styles
const styles = {
  table: {
    width: "85%",
    margin: "30px auto",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    
  },

  th: {
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
  },

  td: {
    textAlign: "center",
    padding: "12px",
  },

  input: {
    padding: "8px",
    width: "90%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },

  button: {
    padding: "6px 12px",
    margin: "4px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    transition: "0.3s",
  },
};


