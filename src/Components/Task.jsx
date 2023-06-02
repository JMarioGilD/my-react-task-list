
function Task(props) {
   const { name } = props

   return (
        <li>
           <article>
             <h3> { name } </h3>
             <input type = "checkbox"/>
           </article>
        </li>
   )
};

export default Task
