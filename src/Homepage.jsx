import React, {useState} from 'react'
import MMap from './mainMap/mMap';

function Homepage() {

    const [spots] = useState(new Map(
        Array.from({ length: 36 }, (_, i) => [i + 1, "OPEN"])
      ));
    

  return (
    <div>
        <MMap spots={spots} />
    </div>
  )
}

export default Homepage