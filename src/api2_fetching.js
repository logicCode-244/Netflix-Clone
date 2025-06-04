import { useQuery } from "react-query";
import { fetchMovieInfo2 } from "./api2";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Modal2 from 'react-modal';
import { useState } from "react";
import 'swiper/css'

export default function MovieSwiper2() {

    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalClose2, setModalClose2] = useState(false);
    const [imagePath2, setImagePath2] = useState('');
    const [overview2, setOverview2] = useState('');
    const [title2, setTitle2] = useState('');
    const [imageTitle2, setImageTitle2] = useState('');
    
    const { isLoading, data } = useQuery({
        queryKey: ["api2"],
        queryFn: fetchMovieInfo2,
    })

    const ButtonS = styled.button`
        background-color: transparent;
        border: 2px transparent;
    `;

    const Img2 = styled.img`
        width: 150px;
        height: 250px;
    `;

   

    const customModalStyles = {
        overlay: {
          backgroundColor: " rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100%",
          zIndex: "10",
          position: "fixed",
          top: "0",
          left: "0",
          padding:"0",
          margin: "0",
      },
        content: {
          width: "500px",
          height: "500px",
          zIndex: "150",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: '0px solid black',
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#333333",
          justifyContent: "center",
          overflow: "auto",
          padding: "0",
          margin: "0",
          overflow: "hidden",
          backgroundColor:'black',
          color:'white',
        },
      };
      
      const ModalText = styled.div`
      color: white;
      font-family: 'Bebas Neue', "sans-serif";
      margin-bottom: 70px;
      margin-left: 10px;
      margin-top: 7px;
    `;
    const ModalTitle = styled.div`
      margin-top:300px;
      color: white;
      font-size: 50px;
      margin-left: 10px;
    `;
    const Button = styled.button`
      background-color: transparent;
      border: 2px transparent;
      border-radius: 50px;
      margin-left: 475px;
      position: fixed;
      z-index: 1;
      
    `;

    const Div2 = styled.div`
        width: 100%;
        height: 50%;
        background-position:center;
        background-size:cover;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,255)), url("http://image.tmdb.org/t/p/original${imagePath2}");
        position: absolute;
    `;

    if(!isLoading) {
        console.log(data)
    }

    return (!isLoading && <>
    <Swiper slidesPerView={9}>
    {data.results.map((movie, index) => {
      return <SwiperSlide key = {index}>
        <ButtonS onClick={(event)=>{
          event.preventDefault()
          console.log(movie)
          setImagePath2(movie.backdrop_path)
          setOverview2(movie.overview)
          setModalOpen2(true)
          setTitle2(movie.title)}
        }>
          <Img2 src = {`https://image.tmdb.org/t/p/original${movie.backdrop_path}width={150}`} height={200}/>
        </ButtonS> </SwiperSlide>})}
  </Swiper>
  <Modal2
        isOpen={modalOpen2}
        onRequestClose={modalClose2}
        style={customModalStyles}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={false}

      > <Button onClick={(event)=>{event.preventDefault()
          setModalOpen2(false)}}>X</Button>
          <Div2/>
      <ModalTitle>{title2}</ModalTitle>
      <ModalText>{overview2}</ModalText>
      </Modal2>
  </> 
    )

}

