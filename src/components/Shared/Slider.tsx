// import { RootStateOrAny, useSelector } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';
import { Grid, Card, Col, Text } from "@nextui-org/react";

export const Slider = () => {

  // const { loading } = useSelector((state: RootStateOrAny) => state.ui);

  const HeroImage = () => (
    <Card>
      <Card.Footer css={{ position: "absolute", zIndex: 1, bottom: 5, right: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            Los Mejores Productos
          </Text>
          <Text h4 color="white">
            Para los mejores atletas
          </Text>
        </Col>
      </Card.Footer>
      <Card.Image
        src="https://images.pexels.com/photos/5018188/pexels-photo-5018188.jpeg"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
  );

  return (
    // <div className='container full-height animate__animated animate__fadeIn animate__faster'>
    //     <div className="slide">
    //         <div className='infoContainer'>
    //             <h2 className='title'>Olympus Center</h2>
    //             <p className='description'>Creemos que cuando nos unimos y nos damos ánimos unos a otros, nada puede detenernos. Cuando eres parte de nuestros miembros, tienes acceso a los mejores productos.</p>
    //             <div className='buttonContainer'>
    //                 <p className='slideButton'>LEARN MORE ...</p>
    //             </div>
    //         </div>
    //         {
    //             loading ?
    //                 (
    //                     <div className="skeletonLoader">
    //                         <Skeleton
    //                             circle
    //                             height="100%"
    //                             width="100%"
    //                             containerClassName="avatar-skeleton"
    //                         />
    //                     </div>                            
    //                 )
    //                 :
    //                 (
    //                     <div className="imageContainerSlider">
    //                         <img className='image' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641613241/Olympus/pexels-pixabay-220383_utmdhd.jpg" alt="" />
    //                     </div>
    //                 )
    //         }
    //     </div>
    // </div>

    <Grid.Container gap={2} justify="center" alignItems="center">
      <Grid xs={12} sm={6}>
        <Text h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold">
          Olympus Store
        </Text>
      </Grid>
      <Grid xs={12} sm={6}>
        <HeroImage />
      </Grid>
    </Grid.Container>
  )
}


