import Image from 'next/image'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import { Container,
         Typography,
         FormControl, 
         InputLabel,
         Box,
         Input,
         FormHelperText,
         Button,
         CircularProgress,
        } from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'
import { Alert } from '@mui/material'


const Signin = () => {
    const classes = useStyles()
    const router = useRouter()
    //const { setToasty } = useToasty()
    const [ session ] = useSession()

    console.log(session)

    const handleGoogleLogin = () => {
        signIn('google', {
            callbackUrl: 'http://localhost:3000/user/dashboard'
        })
    }
    // values = fomulário
    const handleFormSubmit = async values => {
        signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: 'http://localhost:3000/user/dashboard'
        })
    }

    return(
        <TemplateDefault>
            <Container maxWidth='sm' component='main'className={classes.container}>
              <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                Entre na sua conta
              </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={ classes.box}>

                    <Box display='flex' justifyContent='center'>
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={
                                <Image
                                    src="/images/logo_google.svg" 
                                    width={20}
                                    height={20}
                                    alt="Login com Google"
                                />
                            }
                            onClick={handleGoogleLogin}
                            >
                                Entrar com o Google
                            </Button>
                    </Box>
                    <Box className={classes.orSeparator}>
                        <span>ou</span>
                    </Box>
                                        
                    <Formik
                        initialValues={ initialValues }
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
    
                    >
                        {
                            ({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                            }) =>{
                                return(
                                    
                                    <form onSubmit={handleSubmit}>
                                        {
                                            router.query.i === '1'
                                                ? (
                                                    <Alert security='error' className={classes.errorMessage}>
                                                        Usuário ou senha inválidos
                                                    </Alert>
                                                )
                                                :null
                                        }
                                        <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                                          <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                                            <Input
                                                name='email'
                                                type='email'
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                                            <InputLabel className={classes.inputLabel}>Senha</InputLabel>
                                            <Input
                                                name='password'
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null} 
                                            </FormHelperText>
                                        </FormControl>
                                        {
                                            isSubmitting
                                            ? (
                                                <CircularProgress className={classes.loading}/>
                                            ) : (
                                                <Button
                                                    type='submit'
                                                    fullWidth
                                                    variant='contained'
                                                    className={classes.submit} 
                                                    color='primary'
                                                >
                                                    Entrar
                                                </Button>
                                            )
                                        }

                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Container>

        </TemplateDefault>
    )
}

export default Signin