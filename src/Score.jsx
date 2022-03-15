const Score = (props) => {
  return ( 
    <>
      <div>
        {props.score.date} - {props.score.score}
      </div>
    </>
   );
}
 
export default Score;