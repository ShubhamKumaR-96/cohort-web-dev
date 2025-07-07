const style = {
  width: "200px",
  borderRadius: "10px",
  borderColor: "grey",
  borderWidth: 1,
  color: "black" // 
};

function PostComponent(){
  return (
    <div style={style}>
    <div style={{display:'flex'}} >
      <img src={"https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"} alt="logo" style={{width:"30px", height:"30px", borderRadius:"20px"}} />
    
    <div style={{fontSize:"14px",marginLeft:"5px"}}>
      <b>Welcome React Universe!</b>
      <div>4k followers</div>
      <div>215 Posts</div>
    </div>
    </div>
    <div style={{fontSize:"14px"}}>
      Want to know how to become good developers?
    </div>
    </div>
  )
}
export default PostComponent