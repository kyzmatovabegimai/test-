 import './ExpenseItem.css'

  const ExpenseItem = (props) => {
      const expenseTitle = props.items.title;
      const expenseDate = props.items.date;
      const month = props.expenseDate.toLocaleSrting('En-us', {month: 'long'})
      const day = props.expenseDate.toLocaleSrting('En-us', {day: '2-digit'})
      const year =props.expenseDate
      const expensePrice = props.items.price;
    
   


};

export default ExpenseItem