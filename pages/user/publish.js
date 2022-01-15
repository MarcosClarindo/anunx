import { Box,
        Button, 
        Container, 
        FormControl, 
        IconButton, 
        InputAdornment, 
        InputLabel, 
        MenuItem, 
        OutlinedInput, 
        Select, 
        TextField, 
        FormHelperText,
        Typography, 
        Input,
        useFormControl} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'    
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever, ErrorSharp, YouTube } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const useStyles = makeStyles((theme) =>({
    mask: {},
    mainImage:{},
   
    boxContainer: {
        paddingBottom: theme.spacing(3),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
    thumbsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    },
    dropZone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        width: 200,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black'  // bordar com traços
    },
    thumb: {
        position: 'relative',
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        margin: '0 15px 15px 0',
        backgroundPosition: 'center center',

        '& $mainImage': {
            backgroundColor: 'blue',
            padding: '6px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },

        '&:hover $mask': {
            display: 'flex',
        },
        // para passando o filho
        '& $mask' : {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0 , 0, 0.1)',
            width: '100%',
            height: '100%',
        }
    }
}))

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6,"Escreva um titulo maior")
        .max(100, "Tíluto muito grande.")
        .required("Campo obrigatório."),

    category: yup.string().required('Campo obrigatório.'),

    description: yup.string()
        .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
        .required('Campo obrigratório'),

    price: yup.number().required('Campo obrigatório.'),
    email: yup.string().required().email('Campo obrigatório.'),
    name:  yup.string().required('Campo obrigatório.'),
    phone: yup.number().required('Campo obrigatório.')
    
})
const Publish = () => {
    const classes = useStyles()

    // armazenando as imagens em um estado para um preview
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) =>{
            // percorrendo o Array e criando um novo objeto
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            // manter as imagens na lista quando chamar outras imagens 
            setFiles([
                ...files,
                ...newFiles,
            ])
        }
    })

    // Remover arquivo
    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles (newFileState)
    }
    return(
        <TemplateDefault>
            <Formik
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price:'',
                    email:'',
                    nome: '',
                    phone:'',

                }}
                validationSchema={validationSchema} // necessário ser uma função  
                onSubmit={(values) =>{

                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth='sm'>
                                        <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                                            Publicar Anúncio
                                        </Typography>
                                        <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                                            Quanto mais detalhado, melhor!
                                        </Typography>
                                </Container>
                    
                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        
                                        <FormControl error={errors.title} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Título do Anúncio</InputLabel>
                                            <Input 
                                                name='title'
                                                value={values.title}
                                                onChange={handleChange}
                                                label="Vectra Gtx"
                                                                                           
                                            />
                                            <FormHelperText>
                                                { errors.title }
                                            </FormHelperText>
                                        </FormControl>
                                        <br/><br/>

                                        <FormControl error={errors.category} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Category</InputLabel>
                                            <Select
                                                name='category'
                                                value={values.category}
                                                fullWidth
                                                onChange={handleChange}
                                            >
                                             
                                                <MenuItem value='Bebê e Criança'>Bebê e Criança</MenuItem>
                                                <MenuItem value='Agricultura'>Agricultura</MenuItem>
                                                <MenuItem value='Moda'>Moda</MenuItem>
                                                <MenuItem value='Carros, Moto e Barcos'>Carros, Motos e Barcos</MenuItem>
                                                <MenuItem value='Serviços'>Serviços</MenuItem>
                                                <MenuItem value='Lazer'>Lazer</MenuItem>
                                                <MenuItem value="Animais">Animais</MenuItem>
                                                <MenuItem value='Moveis, Casa e Jardim'>Moveis, Casa e Jardim</MenuItem>
                                                <MenuItem value='Imóveis'>Imóveis</MenuItem>
                                                <MenuItem value='Equipamentos e Ferramentas'>Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value='Celulares e Tablests'>Celulares e Tablets</MenuItem>
                                                <MenuItem value='Esporte'>Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value='Empregos'>Empregos</MenuItem>
                                                <MenuItem value='Outros'>Outros</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                { errors.category}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                    
                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component='h6' variant='h6' color='textPrimary'>
                                            Imagens
                                        </Typography>
                                        <Typography component='div' variant='body2' color='textPrimary'>
                                            Primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        <Box className={classes.thumbsContainer}>
                                            <Box className={classes.dropZone} {...getRootProps()}>
                                                <input {...getInputProps()}/>
                                                <Typography variant='body2' color='textPrimary'>
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </Box>
                                            
                                            
                                            {
                                                // Exibir o map
                                                files.map((file, index) => (
                    
                                                    <Box
                                                        key={file.name}
                                                        className={classes.thumb}
                                                        style={{backgroundImage: `url(${file.preview})`}}
                                                    >
                                                        {
                                                            index == 0 ?
                                                                <Box className={classes.mainImage}>
                                                                    <Typography variant='body2' color='secondary'>
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                            : null    
                                                        }
                                                        <Box className= {classes.mask}>
                                                            <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}> 
                                                                <DeleteForever fontSize='large'/>
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                    
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </Container>
                    
                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        
                                        <FormControl error={errors.description} fullWidth>
                                            <InputLabel className={classes.inputLabel}>
                                                Escreva os detadelhes do que está vendendo.
                                            </InputLabel>
                                            <Input
                                                name = 'description'
                                                multiline
                                                rows={6}
                                                variant='outlined'
                                                onChange={handleChange}
                                                
                                            />
                                            <FormHelperText>
                                                { errors.description }
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                    
                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={ classes.box}>
                                    <FormControl error={errors.price} fullWidth>
                                            <InputLabel className={classes.inputLabel}> Preço de venda.</InputLabel>
                                            <Input
                                                name = 'price'
                                                variant='outlined'
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position='"start'>R$</InputAdornment>}
                                                
                                            />
                                            <FormHelperText>
                                                { errors.price }
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                    
                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
                                            Dados de Contato
                                        </Typography>

                                       <FormControl error={errors.name} fullWidth>
                                           <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                                           <Input 
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                
                                           />
                                           <FormHelperText>
                                               { errors.name}
                                           </FormHelperText>
                                        </FormControl>

                                        <br/><br/>

                                        <FormControl error={errors.email} fullWidth>
                                           <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                                           <Input 
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                
                                           />
                                           <FormHelperText>
                                               { errors.email}
                                           </FormHelperText>
                                        </FormControl>

                                        <br/><br/>

                                        <FormControl error={errors.phone} fullWidth>
                                           <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                                           <Input 
                                                name='phone'
                                                value={values.phone}
                                                onChange={handleChange}
                                             
                                           />
                                           <FormHelperText>
                                               { errors.phone}
                                           </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>
                    
                                <Container maxWidth='md'className={classes.boxContainer}>
                                    <Box textAlign="right">
                                        <Button type='submit' variant='contained' color='primary'>
                                            Publicar Anúncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }

            </Formik>
           
        </TemplateDefault>
    )
}

export default Publish