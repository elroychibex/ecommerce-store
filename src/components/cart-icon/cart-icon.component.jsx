import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
<span className="item-count">{itemCount}</span>
  </div>
);

//Sending to the reducer
const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toggleCartHidden())
});

//Recieving from the reducer
const mapStateToProps = (state) => ({
  itemCount : selectCartItemsCount(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CartIcon);
