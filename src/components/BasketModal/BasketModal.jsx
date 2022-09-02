import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Items from '../Items/Items';
import Price from '../Price/Price';
import Quantity from '../Quantity/Quantity';
import Button from '../Button/Button';
import { calculateTotal, calculateTotalCost } from '../../utils/Utils';
import formatCurrency from '../../utils/Utils';
import './BasketModalStyles.css';

export default function BasketModal({
  mountainDew,
  setMountainDew,
  desperados,
  setDesperados,
  jackDaniels,
  setJackDaniels,
  mountainDewQty,
  setMountainDewQty,
  desperadosQty,
  setDesperadosQty,
  jackDanielsQty,
  setJackDanielsQty,
  total,
  setTotal,
  withVAT,
}) {
  const handleClearOnClick = () => {
    const zero = 0;
    setMountainDewQty(zero);
    setDesperadosQty(zero);
    setJackDanielsQty(zero);
  };

  useEffect(() => {
    const mountianDewTotal = withVAT
      ? calculateTotal(1.8, mountainDewQty).totalWithVat
      : calculateTotal(1.8, mountainDewQty).total;
    setMountainDew(mountianDewTotal);
    localStorage.setItem('mountainDew', mountainDewQty.toString());

    const desperadosTotal = withVAT
      ? calculateTotal(2.58, desperadosQty).totalWithVat
      : calculateTotal(2.58, desperadosQty).total;
    setDesperados(desperadosTotal);
    localStorage.setItem('desperados', desperadosQty.toString());

    const jackDanielsTotal = withVAT
      ? calculateTotal(1.8, jackDanielsQty).totalWithVat
      : calculateTotal(1.8, jackDanielsQty).total;
    setJackDaniels(jackDanielsTotal);
    localStorage.setItem('jackDaniels', jackDanielsQty.toString());

    const totalCost = calculateTotalCost(mountainDew, desperados, jackDaniels);
    setTotal(totalCost);
  }, [
    mountainDew,
    desperados,
    jackDaniels,
    mountainDewQty,
    desperadosQty,
    jackDanielsQty,
  ]);

  const totalCostStyles = {
    fontWeight: 'bold',
    fontSize: '30px',
  };

  const checkOutLabel = 'Check Out >';

  const itemArray = ['Mountain Dew', 'Desperados', 'Jack Daniels'];
  const forInputArray = ['mdInput', 'desperadosInput', 'jdInput'];

  return (
    <div className="cards">
      <div className="item">
        <Items forInputArray={forInputArray} itemArray={itemArray} />
      </div>
      <div className="quantity">
        <Quantity
          mountainDewQty={mountainDewQty}
          desperadosQty={desperadosQty}
          jackDanielsQty={jackDanielsQty}
          setMountainDewQty={setMountainDewQty}
          setDesperadosQty={setDesperadosQty}
          setJackDanielsQty={setJackDanielsQty}
        />
      </div>
      <div className="price">
        <Price
          mountainDew={mountainDew}
          desperados={desperados}
          jackDaniels={jackDaniels}
          setDesperados={setDesperados}
          setMountainDew={setMountainDew}
          setJackDaniels={setJackDaniels}
        />
      </div>
      <div className="totalprice">
        <p style={totalCostStyles}>{formatCurrency(total)}</p>
      </div>
      <div className="button">
        <Button
          id={'clearbutton'}
          label={'Clear'}
          handleFunction={handleClearOnClick}
        />
      </div>
      <div className="button">
        <Button id={'checkoutbutton'} label={checkOutLabel} />
      </div>
    </div>
  );
}

BasketModal.propTypes = {
  mountainDew: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setMountainDew: PropTypes.func,
  desperados: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setDesperados: PropTypes.func,
  jackDaniels: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setJackDaniels: PropTypes.func,
  mountainDewQty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setMountainDewQty: PropTypes.func,
  desperadosQty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setDesperadosQty: PropTypes.func,
  jackDanielsQty: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setJackDanielsQty: PropTypes.func,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setTotal: PropTypes.func,
  withVAT: PropTypes.bool,
};
