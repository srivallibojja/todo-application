function Child1({props})
{
    return(
        <div class="container">
           <table className="table text-center">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Salary</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      props.map((ele)=>
                      <tr>
                          <td>{ele.id}</td>
                          <td>{ele.name}</td>
                          <td>{ele.salary}</td>

                      </tr>)
                  }
              </tbody>
           </table>
        </div>
    )
}
export default Child1;