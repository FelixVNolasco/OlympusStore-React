import { Container, Grid, Text, Image, Spacer } from '@nextui-org/react';

export const Content = () => {

  return (
    <Container lg>
      <Grid.Container gap={2} justify="center" alignItems="center" alignContent="center">
        <Grid xs={12} md={6}>
          <div className="flex flex-col p-12">
            <Text h1 size={60} css={{
              textGradient: "45deg, $blue600 -20%, $purple600 50%",
              textAlign: "center"
            }}
              weight="bold">
              Olympus Store
            </Text>
            <Spacer y={1} />
            <Text size={21} b>Creemos que cuando nos unimos y nos damos ánimos unos a otros, nada puede detenernos. Cuando eres parte de nuestros miembros, tienes acceso a los mejores productos.</Text>
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <Image
            showSkeleton
            src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641613241/Olympus/pexels-pixabay-220383_utmdhd.jpg"
            alt="Default Image"
            width={400}
            height={600}
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
