

function Card({weather, toggle, setToggle}) {

    const temp = toggle ? (weather.temperature * 9/5) + 32 : weather.temperature

  return (
    <>
    <div className="card">
            <h1 className="card__title">Weather App</h1>
            <h2 className="card__subtitle">{weather.city}, {weather.country}</h2>

            <div className="card__body">
              <img className="imgIcon" src={weather.iconx} alt="" width={150}/>
                <div className="card__info">
                  <h3 className="card__main">At this moment is:  <span className="state">"{weather.main}"</span></h3>
                  <p className="card__wind-speed">Winds Speed: {weather.windSpeed} m/s</p>
                  <p className="card__clouds">Clouds: {weather.clouds}% </p>presionestado
                  <p className="card__pressure">Pressure: {weather.pressure}hPa</p>
               </div>

               <h2 className="card__temperature">Temp {Math.round(temp)}{toggle ? ('°F') : ('C°')} </h2>

               <button className="bottonW" onClick={()=> setToggle(!toggle)}>Changue to {toggle ? 'C°' : '°F'}</button>
            </div> 
      </div>
    </>
  )
}

export default Card