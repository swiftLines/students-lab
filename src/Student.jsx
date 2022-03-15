import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      <h3>
        {props.student.name}
      </h3>
      <p>
        {props.student.bio}
      </p>
      {props.student.scores.map(score => <Score name={props.student.name}  score={score}/>)}
    </>
   );
}
 
export default Student;