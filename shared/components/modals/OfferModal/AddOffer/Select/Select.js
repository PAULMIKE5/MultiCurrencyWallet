import React, { Fragment } from 'react'
import styles from './Select.scss'
import cssModules from 'react-css-modules'
import FieldLabel from 'components/forms/FieldLabel/FieldLabel'
import { FormattedMessage } from 'react-intl'
import Switching from 'components/controls/Switching/Switching'
import BigNumber from 'bignumber.js'


<<<<<<< 8d17c1127d4f6155d3988cb050bca1b7ea9e4bb5
const Select = ({ balance, currency, changeBalance, switching, all, estimatedFeeValues, ...props }) => (
  <Fragment>
    {
      props.isExchange
        ? ''
        : (
          <FieldLabel inRow >
            <FormattedMessage id="Select10" defaultMessage="Available amount to sell" />
          </FieldLabel>
        )
    }
    <div styleName="groupField">
      <p>{currency.toUpperCase()} { balance ? parseFloat(balance).toFixed(5) : 0.00 }</p>
      <div styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(10))}>
        <FormattedMessage id="Select15" defaultMessage="Sell " />
        1/10
=======
const Select = ({ balance, currency, changeBalance, switching, all, estimatedFeeValues, ...props }) => {
  const balanceToRender = BigNumber(balance).dp(6, BigNumber.ROUND_CEIL)
  return (
    <Fragment>
      <div styleName="groupField">
        <div styleName="group">
          <span styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(4))}><FormattedMessage id="Select23" defaultMessage="25%" /></span>
          <span styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(4))}><FormattedMessage id="Select25" defaultMessage="50%" /></span>
          <span styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(2))}><FormattedMessage id="Select30" defaultMessage="75%" /></span>
          <span styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(2))}><FormattedMessage id="Select40" defaultMessage="100%" /></span>
        </div>
        <Switching onClick={switching} />
>>>>>>> create new branch, fix - (menu bugs, form bugs)
      </div>
      <div styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(4))}><FormattedMessage id="Select26" defaultMessage="1/4" /></div>
      <div styleName="cell" onClick={() => changeBalance(BigNumber(balance).div(2))}><FormattedMessage id="Select27" defaultMessage="1/2" /></div>
      {all &&
        <div
          styleName="cell"
          onClick={
            () => changeBalance(BigNumber(estimatedFeeValues).isGreaterThan(0)
              ? BigNumber(balance).minus(estimatedFeeValues)
              : balance
            )
          }>
          <FormattedMessage id="Select28" defaultMessage="ALL" />
        </div>
      }
      <Switching onClick={switching} />
    </div>
  </Fragment>
)

export default cssModules(Select, styles)