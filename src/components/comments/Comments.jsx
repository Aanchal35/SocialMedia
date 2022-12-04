import "./comments.scss"

const Comments = () => {
    //comments
    
    const comments=[
        {
            id:1,
            desc:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
            name:"diya_",
            userId:1,
            profilePicture:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg"
        },
        {
            id:2,
            desc:"You look so stunning.",
            name:"arina909",
            userId:2,
            profilePicture:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg"
        },
        {
            id:3,
            desc:"Simply iconic, I'm in love! ❤",
            name:"tarisha55",
            userId:3,
            profilePicture:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg"
        },
    ]
  return (
    <div className="comments">
        <div className="write">
        
        <input type="text" placeholder="write a commment"/>
        <button>send</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePicture} alt=""/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date"> 1 hour ago</span>
            </div>
        ))}
    
      
    </div>
  )
}

export default Comments
