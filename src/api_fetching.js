import { useQuery } from "react-query";
import { fetchMovieInfo } from "./api";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import 'swiper/css';


export default function MovieSwiper(props) {


    const [modalOpen, setModalOpen] = useState(false);
    const [modalClose, setModalClose] = useState(false);
    const [imagePath, setImagePath] = useState('');
    const [overview, setOverview] = useState('');
    const [title, setTitle] = useState('');
    const [imageTitle, setImageTitle] = useState('');

    console.log(props.data)

      const ButtonS = styled.button`
        background-color: transparent;
        border: 2px transparent;
    `;

    const Img = styled.img`
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

    const Div = styled.div`
        width: 100%;
        height: 50%;
        background-position:center;
        background-size:cover;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,255)), url("http://image.tmdb.org/t/p/original${imagePath}");
        position: absolute;
    `;

    return  ( <>
        <Swiper slidesPerView={9}>
        {props.data.results.map((movie, index) => {
        return <SwiperSlide key = {index}>
            <ButtonS onClick={(event)=>{
            event.preventDefault()
            console.log(movie)
            setImagePath(movie.backdrop_path)
            setOverview(movie.overview)
            setModalOpen(true)
            setTitle(movie.title)}
            }>
            <Img src = {`https://image.tmdb.org/t/p/original${movie.backdrop_path}width={150}`} height={200}/>
            </ButtonS> </SwiperSlide>})}
        </Swiper> 
        <Modal
        isOpen={modalOpen}
        onRequestClose={modalClose}
        style={customModalStyles}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={false}
        
        > <Button onClick={(event)=>{event.preventDefault()
        setModalOpen(false)}}>X</Button>
        <Div />
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{overview}</ModalText>
        </Modal></>
    )
        
}