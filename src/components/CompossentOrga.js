import React from 'react';

const CompossentOrga = ({ keyData }) => {
  return (
      <div className="compossent-orga">
          <div className="item">
              <img src="/iconUser/calories-icon.png" alt="Calories" />
              <div>
                  <p>{keyData.calorieCount.toLocaleString()}kCal</p>
                  <span>Calories</span>
              </div>
          </div>
          <div className="item">
              <img src="/iconUser/protein-icon.png" alt="Proteins" />
              <div>
                  <p>{keyData.proteinCount}g</p>
                  <span>Protéines</span>
              </div>
          </div>
          <div className="item">
              <img src="/iconUser/carbs-icon.png" alt="Carbohydrates" />
              <div>
                  <p>{keyData.carbohydrateCount}g</p>
                  <span>Glucides</span>
              </div>
          </div>
          <div className="item">
              <img src="/iconUser/fat-icon.png" alt="Lipids" />
              <div>
                  <p>{keyData.lipidCount}g</p>
                  <span>Lipides</span>
              </div>
          </div>
      </div>
  );
};

export default CompossentOrga;