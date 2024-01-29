import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Activity = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token')
  useEffect(() => {
      if (!token) {
          navigate('/')
      }
  }, [token])

  //   const [obj, setObj] = useState({
  //     firstName: 'akshay',
  //     lastName: 'gp',
  //     address: {
  //       first: 'test1',
  //       second: 'test2',
  //     }
  //   })

  // const handleChange = () => {
  //   setObj({ ...obj, address:{...obj.address, second:'test3'} })
  // }

  // function A(x) {
  //   function B(y) {
  //     function C(z) {
  //       console.log(x+y+z)
  //     }
  //     C(3)
  //   }
  //   B(2)
  // }
  // A(1)

  // function map(f, a){
  //   let result =[];
  //   let i;
  //   for(i=0; i!= a.length; i++){
  //     result[i] = f(a[i]);
  //     return result;
  //   }
  // }
  // function f (x){
  //   return x*x*x;
  // }

  // let numbers = [0, 1, 2, 5, 10];
  // let cube = map(f, numbers)
  // console.log('cube', cube)

  // const numbers = [1,2,3,4,5,6];
  
  // const evnNumbers = numbers.filter((num)=>{return !(num % 2 === 0)})
  // console.log('evnNumbers', evnNumbers)
  
  // const numbers = [1,2,3,4,5,6];

  // const arraySum = (num) => {
  //   if(num.length === 0){
  //     return 0
  //   }

  //   return num[0] + arraySum(num.slice(1))
  // }

 
  // console.log('arraySum', arraySum(numbers))
  return (
    <>
      <div> Activity </div>
      {/* <div> {obj.firstName} </div>
      <div> {obj.lastName} </div>
      <div> {obj.address.first} </div>
      <div> {obj.address.second} </div>
      <button onClick={handleChange}>change</button> */}
    </>

  )
 
}

export default Activity