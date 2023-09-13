import Row from "../src/Row"
import request from "../src/request"
import Banner from "./Banner";
import Header from "./Header";
function MainPage() {
  return (
    <div className="App">

      <Header/>
      <Banner/>
          <Row title={" Upcoming Now "} fetchUrl={request.fetchUpcoming }/>
          <Row title={" Top Rated"} fetchUrl={request.fetchTopRated}/>
          <Row title={" Popular "} fetchUrl={request.fetchPopular}/>
          <Row title={" TV Shows "} fetchUrl={request.fetchTVShows}/>
          <Row title={" Horror "} fetchUrl={request.fetchHorror}/>
          <Row title={" Comedy "} fetchUrl={request.fetchComedy}/>
          <Row title={" Action "} fetchUrl={request.fetchAction}/>
        
    </div>
  );
}

export default MainPage