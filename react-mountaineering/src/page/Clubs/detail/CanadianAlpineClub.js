import img1 from "../../../img/clubs/Canadian Alpine Club/CAC01.jpg";
import '../../css/dt.css'

function CAC(){
    return (
        <div className="test">
            <h1>The Alpine Club Of Canada</h1>
            <h2>Founded: 1906</h2>
            <h2>Place of origin: Winnipeg, Manitoba, Canada</h2>
            <img className="img_bv" src={img1} alt=""></img>
            <p><i>"To bring together, and give voice to, Canada’s mountaineering community."</i></p>
            <br/>
            <p>The Alpine Club Of Canada (ACC) is a renowned non-profit organization with a rich heritage deeply rooted in the exploration and preservation of Canada’s mountainous regions. It has been at the forefront of promoting mountaineering, fostering a sense of adventure, and advocating for the protection of the alpine environment for over a century. The club is housed in the American Mountaineering Center (AMC) in Golden, Colorado.</p>
            <p>The club’s founders envisioned an organization that would provide a welcoming space for like-minded individuals to come together, share their love for the mountains, and push the boundaries of mountain exploration. Over the years, the ACC has grown to become a vibrant community of passionate climbers, hikers, and outdoor enthusiasts with hubs of local community in our sections across the country. Through its dedication to the pursuit of knowledge and adventure, the ACC has expanded its understanding of Canada’s mountains and the outdoors and their significance to our national identity.</p>
        </div>
    );
}
export default CAC;