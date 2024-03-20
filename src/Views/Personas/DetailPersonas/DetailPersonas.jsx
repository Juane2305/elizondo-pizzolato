import React from 'react'
import { useParams } from 'react-router-dom';
import personas from '../personas.json'

const DetailPersonas = () => {

  const { id } = useParams(); 
  const personasDetail = personas.find(idea => idea.id === parseInt(id));

  return (
    <div>DetailPersonas</div>
  )
}

export default DetailPersonas