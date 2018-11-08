// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateDeck = `subscription OnCreateDeck {
  onCreateDeck {
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
export const onUpdateDeck = `subscription OnUpdateDeck {
  onUpdateDeck {
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
export const onDeleteDeck = `subscription OnDeleteDeck {
  onDeleteDeck {
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
export const onCreateCard = `subscription OnCreateCard {
  onCreateCard {
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
export const onUpdateCard = `subscription OnUpdateCard {
  onUpdateCard {
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
export const onDeleteCard = `subscription OnDeleteCard {
  onDeleteCard {
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
