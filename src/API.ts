/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDeckInput = {
  id?: string | null,
  name: string,
};

export type UpdateDeckInput = {
  id: string,
  name?: string | null,
};

export type DeleteDeckInput = {
  id?: string | null,
};

export type CreateCardInput = {
  id?: string | null,
  question: string,
  answer?: string | null,
  cardDeckId: string,
};

export type UpdateCardInput = {
  id: string,
  question?: string | null,
  answer?: string | null,
  cardDeckId?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
};

export type ModelDeckFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelDeckFilterInput | null > | null,
  or?: Array< ModelDeckFilterInput | null > | null,
  not?: ModelDeckFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDFilterInput | null,
  question?: ModelStringFilterInput | null,
  answer?: ModelStringFilterInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type CreateDeckMutationVariables = {
  input: CreateDeckInput,
};

export type CreateDeckMutation = {
  createDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateDeckMutationVariables = {
  input: UpdateDeckInput,
};

export type UpdateDeckMutation = {
  updateDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteDeckMutationVariables = {
  input: DeleteDeckInput,
};

export type DeleteDeckMutation = {
  deleteDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
};

export type CreateCardMutation = {
  createCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
};

export type UpdateCardMutation = {
  updateCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
};

export type DeleteCardMutation = {
  deleteCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};

export type GetDeckQueryVariables = {
  id: string,
};

export type GetDeckQuery = {
  getDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListDecksQueryVariables = {
  filter?: ModelDeckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDecksQuery = {
  listDecks:  {
    __typename: "ModelDeckConnection",
    items:  Array< {
      __typename: "Deck",
      id: string,
      name: string,
      cards:  {
        __typename: "ModelCardConnection",
        items:  Array< {
          __typename: "Card",
          id: string,
          question: string,
          answer: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      question: string,
      answer: string | null,
      deck:  {
        __typename: "Deck",
        id: string,
        name: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDeckSubscription = {
  onCreateDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateDeckSubscription = {
  onUpdateDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteDeckSubscription = {
  onDeleteDeck:  {
    __typename: "Deck",
    id: string,
    name: string,
    cards:  {
      __typename: "ModelCardConnection",
      items:  Array< {
        __typename: "Card",
        id: string,
        question: string,
        answer: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard:  {
    __typename: "Card",
    id: string,
    question: string,
    answer: string | null,
    deck:  {
      __typename: "Deck",
      id: string,
      name: string,
    },
  } | null,
};
