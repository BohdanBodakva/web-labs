# lab10

React.js: Redux: Cart page (shopping cart)

Description: You are on your way to finishing this insane project… Create the first of three cart pages - Shopping cart page.

Also, here you meet one of the most popular React library - Redux.


Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)


Requirements:

1) All of the requirements for previous React.js works should be kept.
2) Functionality:
    1. Item page: “Add to cart” action should be implemented using Redux flow: when you add an item to cart, it should be added to your redux store. On Cart page you take all of the items from the store
    2. Cart page: “add/remove” actions should be implemented through redux actions & reducers as well.
3) Code style:
    1. Redux: All Redux parts (actions / reducers / store) should be kept in separate and specific files (actions.js / reducers.js / store.js etc.)
    2. Use useSelector hook for getting the data from redux store (instead of connect() function)
    3. Use useDispatch hook for dispatching your actions (instead of connect() function)
