import React from 'react'
import {Link} from 'react-router-dom'

function Reyes() {
  const reyes = ["atanagildo", "ataulfo", "ervigio", "leovigildo", "recesvinto", "sisebuto"];
  const url = "https://www.html6.es/img/rey_";
  return (
    <div className='reyes'>
      {reyes.map(rey =>
      <Link key={rey} to={`/` + rey}>
        <img className='rey' alt={rey} src={url + rey}/>
      </Link>
        )}
    </div>
  )
}

export default Reyes
