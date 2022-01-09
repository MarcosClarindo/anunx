import { Container,
         Grid,
         Box,
         Typography,
         Chip,
         Card,
         CardHeader, 
         Avatar, 
         CardMedia } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import TemplateDefault from '../src/templates/Default'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) =>({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
       margin: '15px 0',
    },
    price: {
        fontWeight: 'bold',
        marginBottom: '15px',
    },
    card: {
        height:'100%',
    },
    carMedia: {
        paddingTop: '56%',
    }
}))
const Product = () => {
    const classes = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation='slide'
                                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                                    style: {
                                        color:'white'
                                    }
                                }}
                            >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.carMedia}
                                        image='https://source.unsplash.com/random?a=1' // para carregar imagens diferentes
                                        title='Titulo da imagem'
                                    />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.carMedia}
                                        image='https://source.unsplash.com/random?a=2' // para carregar imagens diferentes
                                        title='Titulo da imagem'
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className={classes.box} textAlign='left'>
                            <Typography component='span' variant='caption'>Publica 16 junho de 2021</Typography>
                            <Typography component='h4' variant='h4' className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component='h4' variant='h4' className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label='Categoria' />
                        </Box>
                        <Box className={classes.box} textAlign='left'>
                            <Typography component='h6' variant='h6'>Descricção</Typography>
                            <Typography component='p' variant='body2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>T</Avatar>
                                }
                                title='Marcos Clarindo'
                                subheader='marcos_clarindo@hotmail.com'
                            />
                            <CardMedia
                                image='https://source.unsplash.com/random'
                                title='Marcos Clarindo'
                            />
                        </Card>
                        <Box className={classes.box}>
                            <Typography component='h6' variant='h5'>Localização</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product