export default function ({anmol}){
    return(
        <div>
        {
          anmol.map((image)=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
      }
      </div>
    )
}