import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Ubicacion = () => {
  return (
        <section className='w-full relative flex lg:justify-end justify-center items-start lg:items-center pt-20'>
            <MapContainer
                center={[-32.9728157, -68.7872775]}
                zoom={18}
                className='lg:h-[24rem] h-[30rem] w-full shadow-sombra-imagenes z-10'
                scrollWheelZoom={false}
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del proveedor de mapas (en este caso, OpenStreetMap)
                />

                {/* Marcador en la ubicación especificada */}
                <Marker position={[-32.9728157, -68.7872775]}>
                <Popup>
                PIZZOLATO-ELIZONDO | ASESORES DE SEGUROS
                </Popup>
                </Marker>
            </MapContainer>
            <div className='absolute bg-white z-10 flex flex-col justify-center items-center lg:items-start gap-5 p-5 mt-4 lg:mt-0 lg:p-12 lg:right-20'>
                    <h2 className='text-[#0830A6] text-3xl font-bold text-start lg:flex hidden'>¿Cómo encontrarnos?</h2>
                    <div className='lg:flex flex-col gap-2 hidden'>
                        <p className='flex gap-2 items-center text-sm opacity-60 font-medium'><img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710725705/Pizzolato/map-pin-solid_ay1yua.svg" alt="" className='w-4'/>Ozamis 1045 , Maipú, Mendoza.</p>
                        <p className='flex gap-2 items-center text-sm opacity-60 font-medium'><img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1710725699/Pizzolato/envelope-solid_oo10yz.svg" alt="" className='w-4'/>helvio.elizondo@yahoo.com.ar.</p>
                    </div>
                    <div className='flex flex-col lg:justify-start lg:items-start justify-center items-center gap-2'>
                        <h2 className='text-[#0830A6] text-xl font-bold'>Horarios de atención</h2>
                        <div className='flex flex-col gap-1 lg:justify-start lg:items-start justify-center items-center'>
                            <p className='text-sm opacity-60 font-medium'>Lunes a Viernes de 08:00 a 12:00 y de 16:00 a 20:00 hs.</p>
                            <p className='text-sm opacity-60 font-medium'>Sábados de 09:00 a 12:00 hs.</p>
                        </div>
                    </div>
            </div>
        </section>
  )
}

export default Ubicacion