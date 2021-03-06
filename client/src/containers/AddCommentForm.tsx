import { connect } from 'react-redux';
import AddCommentForm from '../components/AddCommentForm';
import { setVisibleOptions, updateExpense} from '../actions';
import {uploadComment} from '../utilities/async'
import {trans} from '../utilities/i18n'
import { Store, Expense } from '../types';

const mapStateToProps = (state: Store, ownProps: any) => ({
  buttonText: trans[state.i18n.language].history.expense.submit,
  id: state.expenseToUpdate.id,
  comment: state.expenseToUpdate.comment,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (id: string, comment: string) => {
    uploadComment(id, comment).then((res) => {
      dispatch(updateExpense(res));
    })
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentForm);
