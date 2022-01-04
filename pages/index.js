import { Paper, 
        Card,
        CardMedia,
        CardContent,
        Container, 
        IconButton, 
        InputBase, 
        Typography, 
        Grid} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'

const useStyle = makeStyles((theme) =>({
    cardMedia: {
        paddingTop: '56%',
    },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },
}))


const Home = () =>{

    const classes = useStyle()
    return(
        <TemplateDefault>
            <Container maxWidth='md'>
                <Typography component='h1' variant='h3' align='center' color='textPrimary'>
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase 
                        placeholder='Ex.: Vectra GTx'
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth='lg' className={classes.cardGrid}>
                <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                    Destaques
                </Typography>
                <br />
                <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={'https://source.unsplash.com/random'}
                                    title="Titulo da imagem"
                                />
                                <CardContent>
                                    <Typography variant='h5' component='h2'>
                                        Produto X
                                    </Typography>
                                    <Typography>
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={'https://source.unsplash.com/random'}
                                    title="Titulo da imagem"
                                />
                                <CardContent>
                                    <Typography variant='h5' component='h2'>
                                        Produto X
                                    </Typography>
                                    <Typography>
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={'https://source.unsplash.com/random'}
                                    title="Titulo da imagem"
                                />
                                <CardContent>
                                    <Typography variant='h5' component='h2'>
                                        Produto X
                                    </Typography>
                                    <Typography>
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                             </Card>
                        </Grid>
                    
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home