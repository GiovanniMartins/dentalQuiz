/*
 * Action Types
 */
export const Types = {
    SALVAR_QUANTIDADE_ACERTOS: 'SALVAR_QUANTIDADE_ACERTOS',
    SALVAR_RESPONDIDOS: 'SALVAR_RESPONDIDOS',
    CLEAR_STORE: 'CLEAR_STORE'
  };
  
  /*
   * Reducer
   */
  const INITIAL_STATE = {
    qtdAcertos: 0,
    respondido: 0,
  };
  
  export default function perguntas(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.SALVAR_QUANTIDADE_ACERTOS:
        return {
          ...state,
          qtdAcertos: action.payload.qtdAcertos,
        };
      case Types.SALVAR_RESPONDIDOS:
        return {
          ...state,
          respondido: action.payload.respondido,
        };
        case Types.CLEAR_STORE:
          return {
            ...INITIAL_STATE
          };
      default:
        return state;
    }
  }
  
  /*
   * Actions Creators
   */
  
  export const Creators = {
    salvarAcertos: (qtdAcertos) => ({
      type: Types.SALVAR_QUANTIDADE_ACERTOS,
      payload: { qtdAcertos },
    }),
  
    salvarRespondidos: (respondido) => ({
      type: Types.SALVAR_RESPONDIDOS,
      payload: { respondido },
    }),

    clearStore: () => ({
      type: Types.CLEAR_STORE,
    }),
  };