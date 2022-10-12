import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClimasContext } from '../../contexts/ClimasContext';
import { IdContext } from '../../contexts/IdContext';
import './ClimaCreacion.css';
import swal from 'sweetalert'

const ClimaCreacion = () => {
  const {idTarjeta, setIdTarjeta}=useContext(IdContext)
  const { listaClimas, setListaClimas } = useContext(ClimasContext)
 //const [idTarjeta,setIdTarjeta]=useState('1')
  const {register,handleSubmit,formState: { errors }} = useForm();
 const navigate = useNavigate()
 
  const onSubmit = (data) => {
   
  console.log(data);
   setIdTarjeta(idTarjeta+1)
    const tarjetaNew = {
    // id: listaClima.length + 1,
     id:idTarjeta,
      name: data.cityName,
      latitud:data.latitud,
      longitud:data.longitud,
      imagen:data.imagen,
    }
    console.log('tarjetaNew');
    console.log(tarjetaNew);
    setListaClimas([...listaClimas,tarjetaNew])
    swal({
      text:'Ubicacion creada con exito',
      icon:'success'
    })
    navigate('/')
  }

  return (
    <div className='palette-new-container'>
      <span>Crea una nueva Ubicacion</span>
      <form className='palette-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Nombre de la ciudad'
          {...register('cityName', {
            required: 'Debe ingresar un nombre',
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='latitud'
          {...register('latitud', {
            required: 'Debe ingresar una latitud',
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='longitud'
          {...register('longitud', {
            required: 'Debe ingresar una longitud',
          })}
        />
        <p>{errors.longitud?.message}</p>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='ingresa una postal'
          {...register('imagen', {
            required: 'Debe ingresar una postal',
          })}
        />
        <p>{errors.imagen?.message}</p>
        <button className='btn-form' type='submit'>
          Crear Tarjeta
        </button>
      </form>
    </div>
  );
};
export default ClimaCreacion;