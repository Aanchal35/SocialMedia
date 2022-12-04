
import "./stories.scss";

const Stories = () => {
    //stories
   
    
    const stories =[
        {
            id: 1,
            name:"Nayeon",
            profile :"https://lastfm.freetls.fastly.net/i/u/770x0/c4c8a9ea9a6ae12bd664dc921dcbd1b8.jpg#c4c8a9ea9a6ae12bd664dc921dcbd1b8"
                
        },
        {
            id: 2,
            name:"jennierubyjane",
            profile :"https://lastfm.freetls.fastly.net/i/u/770x0/23195ed8c4eb42e0e2e8b5a5e0016fe3.jpg#23195ed8c4eb42e0e2e8b5a5e0016fe3",
        },
        {
            id: 3,
            name:"cha enu-woo",
            profile :"https://lastfm.freetls.fastly.net/i/u/770x0/576538bdead13bd4a3a7f5a6dbe05fb3.jpg#576538bdead13bd4a3a7f5a6dbe05fb3",

        },
        {
            id: 4,
            name:"sooyaaa___",
            profile:"https://lastfm.freetls.fastly.net/i/u/770x0/334efb5ece9363a79d7d2d01f63c463e.jpg#334efb5ece9363a79d7d2d01f63c463e"

        },
        {
            id: 5,
            name:"Kihyun",
            profile:"https://lastfm.freetls.fastly.net/i/u/770x0/d2d212e244f2429f20acbaf8e789ff18.jpg#d2d212e244f2429f20acbaf8e789ff18"

        },
    ];
    
  return (
    
    <div className ="stories">

    { stories.map(story =>(
        <div className="story" key={story.id} >
            <img src={story.profile} alt=""/>
            <span>{story.name}</span> 
            </div>
           ) )}  
        </div>
    )
}
export default Stories;
