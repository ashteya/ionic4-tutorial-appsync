// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDeck = `query GetDeck($id: ID!) {
  getDeck(id: $id) {
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
export const listDecks = `query ListDecks(
  $filter: ModelDeckFilterInput
  $limit: Int
  $nextToken: String
) {
  listDecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCard = `query GetCard($id: ID!) {
  getCard(id: $id) {
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
export const listCards = `query ListCards(
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      answer
      deck {
        id
        name
      }
    }
    nextToken
  }
}
`;
