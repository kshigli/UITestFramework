const baseUrl = 'https://dummy.restapiexample.com/api/v1';

const reqParamUser = 	{"name":"QAUser2237","salary":"3400","age":"30"}
let globalUserId: number;

interface UserResponse {    
    status: string
    data: User  
}
interface User {
    name: string
    age: string
    salary: string
    id: number 
}
interface Delete {
    status: string
    data: string
    message: string   
}

/*Test3 - Verify create user */
it('create user', async() => {
    
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json');
  
    const request: RequestInfo = new Request(baseUrl+'/create', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(reqParamUser)
      })  
      
       var response:UserResponse = await sendAPIReq(request)
       var user:User = response.data
       console.log(user);
       console.log("User ID "+user.id);
       /* store user id so that we can use that into Test2 */
       globalUserId = user.id
       expect(response.status).toBe('success');
});


function sendAPIReq<T>(request: RequestInfo): Promise<T> {
    return fetch(request)
      .then(response => {
        if (!response.ok) {
          return response.status;
        }
        return response.json();
      })         
}

/*Test4 - Delete user */
it('delete user', async() => {
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json');
    console.log("User ID "+globalUserId);
      const request: RequestInfo = new Request(baseUrl+'/delete/'+globalUserId, {
          method: 'DELETE',
          headers: headers,
          body: JSON.stringify(reqParamUser)
        })
        var response = await sendAPIReq(request)        
        console.log(response);
});