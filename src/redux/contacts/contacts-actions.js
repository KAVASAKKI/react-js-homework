import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contacts/changeFilter');

const actions = { changeFilter };
export default actions;
