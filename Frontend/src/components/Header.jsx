import { useSelector } from "react-redux";

function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (

        <div className="jumbotron p-3 mb-0 bg-primary text-light" style={ {  textDecorationColor:"black", backgroundColor: '#39014E'}}>

            {/* <img src={'assets/Hikinglogo.jpg'} style={{height:"70px",width:"80px"}} className="float-left" alt=""/> */}
            <img src={'https://scontent.fpnq8-1.fna.fbcdn.net/v/t39.30808-6/299195954_429744962517775_1960659302893558221_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=B87rvsF4dz8AX_KAhJT&_nc_ht=scontent.fpnq8-1.fna&oh=00_AfAFSPn7G1IjGC1ftMRSF8P2WakKSl_yc9cIcsxiBFXg2w&oe=65D8B908'} style={{height:"80px",width:"80px"}} className="float-left" alt=""/>
            {state.loggedin.IsLoggedIn ?
            <>  
            <h5 className="float-right  mr-3 "style={{paddingTop:"5px", backgroundColor: '#39014E'}}>Username {state.loggedin.Username}<br/>Role : {state.loggedin.Role}</h5> 
            </>:''}
            <h2 className="text-center"style={{fontFamily:"Playfair Display",paddingTop:"20px", backgroundColor: '#39014E', marginBottom: '0px'}}>Welcome to TravelBuddy</h2>
            <div className="clearfix" style={{backgroundColor: '#39014E'}}></div>
        </div>
    )
}

export default Header;