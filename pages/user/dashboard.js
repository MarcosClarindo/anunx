import { Button,  
        Container, 
        Grid, 
        Typography 
} from '@material-ui/core'

import { getSession } from 'next-auth/client'
import { makeStyles} from '@material-ui/core/styles'

import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/Products'
import TempletDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'


const useStyles = makeStyles((theme) => ({
    buttonAdd: {
        margin: '30px auto',
        display: 'block' //para obedecer o margin auto
    }
}))
const Home = ({ products }) =>{
    const classes = useStyles()

    console.log(products)

    return (
        <TempletDefault>
            <Container maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center'>
                    Meus Anúncios
                </Typography>
                <Button variant='contained' color='primary' className={classes.buttonAdd}>
                    Publicar novo anúncio
                </Button>
            </Container>
            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {
                        products.map(product => (
                            <Grid key={product._id} item xs={12} sm={6} md={4}>
                                <Card
                                    image={`/uploads/${product.files[0].name}`}
                                    title={product.title}
                                    subtitle={product.price}
                                    actions={
                                        <>
                                            <Button size='small' color='primary'>
                                            Editar
                                            </Button>
                                            <Button size='small' color='primary'>
                                                Remover
                                            </Button>
                                        </>
                                    }
                                />     
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </Container>
        </TempletDefault>
    )
}

Home.requireAuth = true

 // removendo anuncios do usuario logado
export async function getServerSideProps( { req }) {
    const session = await getSession({ req })
    await dbConnect()

    const products =  await ProductsModel.find({ 'user.id': session.userId })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }

    
}
export default Home