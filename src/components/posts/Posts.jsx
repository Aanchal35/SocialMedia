
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
    //posts
    const posts=[
        {
        
            id:1,
            name:"lalalalisa_m",
           userId:1,
           profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/a6233ec1278bfe9b1807d06d472da65e.jpg#a6233ec1278bfe9b1807d06d472da65e",
            desc:"We need to believe we'll become the one that we want to become. For example, if we want to be attractive, first we must believe that we are very attractive. Whether you believe in opportunities or not, if it's not the right time for you, it will come someday",
            img:"https://lastfm.freetls.fastly.net/i/u/770x0/0b47fb19a6cb5dd36b2cb24c2af24180.jpg#0b47fb19a6cb5dd36b2cb24c2af24180s",
        },
        {
          id:2,
          name:"cha eum-woo",
          userId:2,
        profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/aee6b4ea29b18e76fb4e5a2e6331f5ba.jpg#aee6b4ea29b18e76fb4e5a2e6331f5ba",
        desc:"",
          img :"https://lastfm.freetls.fastly.net/i/u/770x0/df91ae1fd0f6d9f6e56c37343ceea8dd.jpg#df91ae1fd0f6d9f6e56c37343ceea8dd",
        },
        {
          id:3,
          name:"jungkook96",
          userId:3,
        profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/99515583cc58be0c8c3b17dc73fe4dc7.jpg#99515583cc58be0c8c3b17dc73fe4dc7"  ,
          desc:"Effort makes you. You will regret someday if you don’t do your best now. Don’t think it’s too late but keep working on it. It takes time, but there’s nothing that gets worse due to practicing. So practice. You may get depressed, but it’s evidence that you are doing goods",
          img :"//lastfm.freetls.fastly.net/i/u/770x0/7105e2e8492de58c85f248b9bbe53063.jpg#7105e2e8492de58c85f248b9bbe53063",
       },
       {
        id:4,
        name:"Jhope",
        userId:4,
        profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/5a6d8cab8483393ec1fc1ad9962de0f7.jpg#5a6d8cab8483393ec1fc1ad9962de0f7",
        desc:"We’re on some path that’s set since we’re born, but I still believe we can change some things. So I believe in my faith but I still don’t believe in my fate",
       },
    {
      id:5,
    name:"sooyaaa--",
   userId:5,
   profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/b4bf1b12d8495dea130525049c32b38a.jpg#b4bf1b12d8495dea130525049c32b38a",
   img:"https://lastfm.freetls.fastly.net/i/u/770x0/efff32ef41023920bc5add7577fb8f3f.jpg#efff32ef41023920bc5add7577fb8f3f",
    desc:"We need to believe we'll become the one that we want to become. For example, if we want to be attractive, first we must believe that we are very attractive. Whether you believe in opportunities or not, if it's not the right time for you, it will come someday",
    },
    
    {
      id:6,
            name:"jennierubyjane",
            userId:6,
            profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/1e8789068fedd786c3d1e292b8e9cff9.jpg#1e8789068fedd786c3d1e292b8e9cff9",
            img:"https://lastfm.freetls.fastly.net/i/u/770x0/4943530892c54e46db88b8f425ca461f.jpg#4943530892c54e46db88b8f425ca461f"
    },
    {
      id: 7,
            name:"roses_are_rosie",
            userId:7,
            profilePic:"https://lastfm.freetls.fastly.net/i/u/770x0/b801ad74123aa3a7d21513de1819ca7e.jpg#b801ad74123aa3a7d21513de1819ca7e",
            img:"https://lastfm.freetls.fastly.net/i/u/770x0/3cee8e69f4db0be221c8952e5c1951db.jpg#3cee8e69f4db0be221c8952e5c1951db"
    },
    
  ];
    return(
    <div className="posts"> 
    {posts.map(post=>(
        <Post post ={post} key={post.id}/>
    ))}
      
    </div>
  )
}

export default Posts;
