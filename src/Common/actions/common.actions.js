import TODO_ACTIONS from "./common.actions.types"

const todos = {
    getData: () => ({ type: TODO_ACTIONS.GET_DATA }),
    setData: (payload) => ({ ...payload, type: TODO_ACTIONS.SET_DATA  }),
};

export default todos;
