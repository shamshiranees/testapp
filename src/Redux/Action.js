

export const setTab = content => ({
  type: 'SET_TAB',
  payload: {
    tab: content
  }
});

export const setEvent = content => ({
    type: 'SET_EVENT',
    payload: {
      index: content
    }
  });
  export const acceptRequest = content => ({
    type: 'ACCEPT_REQUEST',
    payload: {
      data: content
    }
  });
  export const generateInvoice = content => ({
    type: 'GENERATE_INVOICE',
    payload: {
      data: content
    }
  });



// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   payload: { id }
// });

// export const setFilter = filter => ({ type: 'SET_FILTER', payload: { filter } });
