import React from 'react';

const InfoContainer = (props) => {
    return (
        
       <div className="containerInfo">
        <h1>Bonjour <span>Bamba</span> </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <div className="containerGraph">
            <div className="actifQuotidient">actifQuotidient</div>
            <div className="courbe">courbe</div>
            <div className="calories">calories</div>
        </div>
       </div>
    );
};

export default InfoContainer;