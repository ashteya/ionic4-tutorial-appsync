/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDeckInput = {
  id?: string | null;
  name: string;
};

export type UpdateDeckInput = {
  id: string;
  name?: string | null;
};

export type DeleteDeckInput = {
  id?: string | null;
};

export type CreateCardInput = {
  id?: string | null;
  question: string;
  answer?: string | null;
  cardDeckId: string;
};

export type UpdateCardInput = {
  id: string;
  question?: string | null;
  answer?: string | null;
  cardDeckId?: string | null;
};

export type DeleteCardInput = {
  id?: string | null;
};

export type ModelDeckFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  and?: Array<ModelDeckFilterInput | null> | null;
  or?: Array<ModelDeckFilterInput | null> | null;
  not?: ModelDeckFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelCardFilterInput = {
  id?: ModelIDFilterInput | null;
  question?: ModelStringFilterInput | null;
  answer?: ModelStringFilterInput | null;
  and?: Array<ModelCardFilterInput | null> | null;
  or?: Array<ModelCardFilterInput | null> | null;
  not?: ModelCardFilterInput | null;
};

export type SearchableCardFilterInput = {
  id?: SearchableIDFilterInput | null;
  question?: SearchableStringFilterInput | null;
  answer?: SearchableStringFilterInput | null;
  and?: Array<SearchableCardFilterInput | null> | null;
  or?: Array<SearchableCardFilterInput | null> | null;
  not?: SearchableCardFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableCardSortInput = {
  field?: SearchableCardSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCardSortableFields {
  id = "id",
  question = "question",
  answer = "answer"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type CreateDeckMutation = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateDeckMutation = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteDeckMutation = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateCardMutation = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

export type UpdateCardMutation = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

export type DeleteCardMutation = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

export type GetDeckQuery = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListDecksQuery = {
  items: Array<{
    id: string;
    name: string;
    cards: {
      items: Array<{
        id: string;
        question: string;
        answer: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCardQuery = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

export type ListCardsQuery = {
  items: Array<{
    id: string;
    question: string;
    answer: string | null;
    deck: {
      id: string;
      name: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type SearchCardsQuery = {
  items: Array<{
    id: string;
    question: string;
    answer: string | null;
    deck: {
      id: string;
      name: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateDeckSubscription = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateDeckSubscription = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteDeckSubscription = {
  id: string;
  name: string;
  cards: {
    items: Array<{
      id: string;
      question: string;
      answer: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCardSubscription = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

export type OnUpdateCardSubscription = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

export type OnDeleteCardSubscription = {
  id: string;
  question: string;
  answer: string | null;
  deck: {
    id: string;
    name: string;
  };
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDeck(input: CreateDeckInput): Promise<CreateDeckMutation> {
    const statement = `mutation CreateDeck($input: CreateDeckInput!) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDeckMutation>response.data.createDeck;
  }
  async UpdateDeck(input: UpdateDeckInput): Promise<UpdateDeckMutation> {
    const statement = `mutation UpdateDeck($input: UpdateDeckInput!) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDeckMutation>response.data.updateDeck;
  }
  async DeleteDeck(input: DeleteDeckInput): Promise<DeleteDeckMutation> {
    const statement = `mutation DeleteDeck($input: DeleteDeckInput!) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDeckMutation>response.data.deleteDeck;
  }
  async CreateCard(input: CreateCardInput): Promise<CreateCardMutation> {
    const statement = `mutation CreateCard($input: CreateCardInput!) {
        createCard(input: $input) {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCardMutation>response.data.createCard;
  }
  async UpdateCard(input: UpdateCardInput): Promise<UpdateCardMutation> {
    const statement = `mutation UpdateCard($input: UpdateCardInput!) {
        updateCard(input: $input) {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCardMutation>response.data.updateCard;
  }
  async DeleteCard(input: DeleteCardInput): Promise<DeleteCardMutation> {
    const statement = `mutation DeleteCard($input: DeleteCardInput!) {
        deleteCard(input: $input) {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCardMutation>response.data.deleteCard;
  }
  async GetDeck(id: string): Promise<GetDeckQuery> {
    const statement = `query GetDeck($id: ID!) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDeckQuery>response.data.getDeck;
  }
  async ListDecks(
    filter?: ModelDeckFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDecksQuery> {
    const statement = `query ListDecks($filter: ModelDeckFilterInput, $limit: Int, $nextToken: String) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDecksQuery>response.data.listDecks;
  }
  async GetCard(id: string): Promise<GetCardQuery> {
    const statement = `query GetCard($id: ID!) {
        getCard(id: $id) {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCardQuery>response.data.getCard;
  }
  async ListCards(
    filter?: ModelCardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCardsQuery> {
    const statement = `query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCardsQuery>response.data.listCards;
  }
  async SearchCards(
    filter?: SearchableCardFilterInput,
    sort?: SearchableCardSortInput,
    limit?: number,
    nextToken?: number
  ): Promise<SearchCardsQuery> {
    const statement = `query SearchCards($filter: SearchableCardFilterInput, $sort: SearchableCardSortInput, $limit: Int, $nextToken: Int) {
        searchCards(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchCardsQuery>response.data.searchCards;
  }
  OnCreateDeckListener: Observable<OnCreateDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDeck {
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
      }`
    )
  ) as Observable<OnCreateDeckSubscription>;

  OnUpdateDeckListener: Observable<OnUpdateDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDeck {
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
      }`
    )
  ) as Observable<OnUpdateDeckSubscription>;

  OnDeleteDeckListener: Observable<OnDeleteDeckSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDeck {
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
      }`
    )
  ) as Observable<OnDeleteDeckSubscription>;

  OnCreateCardListener: Observable<OnCreateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCard {
        onCreateCard {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnCreateCardSubscription>;

  OnUpdateCardListener: Observable<OnUpdateCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCard {
        onUpdateCard {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnUpdateCardSubscription>;

  OnDeleteCardListener: Observable<OnDeleteCardSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCard {
        onDeleteCard {
          id
          question
          answer
          deck {
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnDeleteCardSubscription>;
}
