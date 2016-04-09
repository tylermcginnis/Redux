import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Duckr'}</p>
      <p className={slogan}>{'The real time, cloud based, modular, scalable, growth hack, social platform. In the cloud.'}</p>
    </div>
  )
}
