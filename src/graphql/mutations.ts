// tslint:disable
// this is an auto generated file. This will be overwritten

export const createDeck = `mutation CreateDeck($input: CreateDeckInput!) {
  createDeck(input: $input) {
    id
    name
    cards {
      items {
        id
        question
        answer
      }
      nextToken
    }
  }
}
`;
export const updateDeck = `mutation UpdateDeck($input: UpdateDeckInput!) {
  updateDeck(input: $input) {
    id
    name
    cards {
      items {
        id
        question
        answer
      }
      nextToken
    }
  }
}
`;
export const deleteDeck = `mutation DeleteDeck($input: DeleteDeckInput!) {
  deleteDeck(input: $input) {
    id
    name
    cards {
      items {
        id
        question
        answer
      }
      nextToken
    }
  }
}
`;
export const createCard = `mutation CreateCard($input: CreateCardInput!) {
  createCard(input: $input) {
    id
    question
    answer
    deck {
      id
      name
    }
  }
}
`;
export const updateCard = `mutation UpdateCard($input: UpdateCardInput!) {
  updateCard(input: $input) {
    id
    question
    answer
    deck {
      id
      name
    }
  }
}
`;
export const deleteCard = `mutation DeleteCard($input: DeleteCardInput!) {
  deleteCard(input: $input) {
    id
    question
    answer
    deck {
      id
      name
    }
  }
}
`;
