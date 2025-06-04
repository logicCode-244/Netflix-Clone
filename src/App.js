
import styled from 'styled-components';
import  MovieSwiper  from './api_fetching';
import  MovieSwiper2  from './api2_fetching';
import title from './api_fetching';
import overview from './api2_fetching';
import { useQuery } from 'react-query';
import { fetchMovieInfo } from './api';



  const StyledTitle = styled.div`
    font-size: 50px;
    font-family: 'Bebas Neue', "sans-serif";
    color: red;
    margin-left: 5px;
  `;
  const StyledText = styled.div`
    font-size: 20px;
    font-family: 'Bebas Neue', "sans-serif";
    color: white;
    margin-left: 5px;
  `;
  const WrapperColl = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
    border-color: white;
    align-items: column;
    justify-content: space-evenly;
  `;
  const WrapperPop = styled.div`
    height: 25%;
    width: 100%;
    background-color: black;
    justify-content: space-evenly;
    align-items: space-evenly;
    margin-top: 10px;
    margin-left: 10px;
  `;
  const WrapperTop = styled.div`
    height: 25%;
    width: 100%;
    background-color: black;
    justify-content: space-evenly;
    align-items: space-evenly;
    margin-top: 10px;
    margin-bottom:70px;
    margin-left: 10px;
`;
  const WrapperPos = styled.div`
    width: 100%;
    background-color: black;
    display:flex;
    flex-wrap:nowrap;
    ::webkit-scrollbar{
       display:none;
    }
  `;



const WrapperTit = styled.div`
  background-color: black;
  justify-content: space-between;
  display:flex;
  width:100%;
`;


const Search = styled.input`
background-color: white;
width: 20%;
height: 10%;
margin-top: 20px;
border-radius: 5px;
`;
const StyledText2 = styled.div`
  font-family: 'Bebas Neue', "sans-serif";
  font-size: 15px;
  color: white;
  margin-left: 30px;
  margin-top: 23px;
`;
const StyledTitle2 = styled.div`
  font-family: 'Bebas Neue', "sans-serif";
  font-size: 70px;
  color: white;
  position: absolute;
  margin-top: 140px;
  margin-left: 70px;
`;
const StyledText3 = styled.div`
    font-size: 20px;
    font-family: 'Bebas Neue', "sans-serif";
    color: white;
    margin-top: 220px;
    margin-left: 70px;
  `;
const StyledText4 = styled.div`
  font-size: 17px;
  font-family: 'Bebas Neue', "sans-serif";
  color: white;
  margin-top: 255px;
  margin-left: 70px;
  position: absolute;
`;
const WrapperBetween = styled.div`
  align-items: row;
  display: flex;
`;
const WrapperRow = styled.div`
  align-items: row;
  display: flex;
  position: absolute;
`;
const WrapperBM = styled.div`
  border-radius: 10px;
`;
const WrapperIMG = styled.div`
  border-radius: 10px;
`;

function App() {


  const { isLoading, data } = useQuery({
    queryKey: ["api"],
    queryFn: fetchMovieInfo,
  });
  if(!isLoading) {
    console.log(data)
  }
  const IMG = styled.div`
    width: 1520px;
    height: 400px;
    background-image:${(props) => `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 255)),url( "https://image.tmdb.org/t/p/original/${props.backdrop}")`};
    background-size: cover ;
    background-position : center;
  `;

  
  
  return ( !isLoading &&
      <WrapperColl>
      <WrapperTit>

        <WrapperBetween>
          <StyledTitle>Netflix</StyledTitle>
          <StyledText2>TV streams</StyledText2>
          <StyledText2>Movies</StyledText2>
          <StyledText2>Recently added</StyledText2>
          <StyledText2>My list</StyledText2>
        </WrapperBetween>

        <Search placeholder='Search up about the movie here'></Search>
      </WrapperTit>
      <WrapperBM>
        <StyledTitle2>{data.results[0].title}</StyledTitle2>
        <WrapperRow>
          <StyledText3>shows</StyledText3>
          <StyledText3>TV stream</StyledText3>
          <StyledText3>Popular</StyledText3>
          <StyledText3>Trending</StyledText3>
        </WrapperRow>
        <StyledText4>{data.results[0].overview}</StyledText4>
        <WrapperIMG>
          <IMG backdrop={data.results[0].backdrop_path}/>
        </WrapperIMG>
      </WrapperBM>
      <WrapperTop>
        <StyledText>Top Rated Movies</StyledText>
        <WrapperPos>
            <MovieSwiper2/>
        </WrapperPos>
      </WrapperTop>


      <WrapperPop>
        <StyledText>Popular Movies</StyledText>
          <WrapperPos>
            <MovieSwiper data={data}/>
        </WrapperPos>
      </WrapperPop>
    </WrapperColl>
  )
}

export default App;
