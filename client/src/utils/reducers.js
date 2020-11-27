import { useReducer } from 'react';

import { 
    ADD_TO_MOVIES,
    UPDATE_MOVIES,
    ADD_TO_DISLIKED_MOVIES,
    ADD_TO_LIKED_MOVIES,
    UPDATE_MOVIE_PREFERENCES,

    useEffectUpdate,
    increment,
    decrement,
    setLoading,
    setError,
 }
from '../utils/actions';

export const reducer = (state, action) => {

    const formatPrice = ({ amount, currency, quantity }) => {
        const numberFormat = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
          currencyDisplay: 'symbol',
        });
        const parts = numberFormat.formatToParts(amount);
        let zeroDecimalCurrency = true;
        for (let part of parts) {
          if (part.type === 'decimal') {
            zeroDecimalCurrency = false;
          }
        }
        amount = zeroDecimalCurrency ? amount : amount / 100;
        const total = (quantity * amount).toFixed(2);
        return numberFormat.format(total);
      };

    switch (action.type) {
                          
    case useEffectUpdate:   
        return {
          ...state,
          ...action.payload,
          price: formatPrice({
            amount: action.payload.unitAmount,
            currency: action.payload.currency,
            quantity: state.quantity,
          }),
        }

      case increment:
        return {
          ...state,
          quantity: state.quantity + 1,
          price: formatPrice({
            amount: state.unitAmount,
            currency: state.currency,
            quantity: state.quantity + 1,
          }),
        }

      case decrement:
        return {
          ...state,
          quantity: state.quantity - 1,
          price: formatPrice({
            amount: state.unitAmount,
            currency: state.currency,
            quantity: state.quantity - 1,
          }),
        }

      case setLoading:
        return { ...state, loading: action.payload.loading }

      case setError:
        return { ...state, error: action.payload.error }
    


        case ADD_TO_MOVIES:
            return {
                ...state,
                movies: [...state.movies, action.movie]
            }

        case ADD_TO_LIKED_MOVIES:
            return {
                ...state,
                likedMovies: [...state.likedMovies, action.movie],
                dislikedMovies: state.dislikedMovies.length === 1 ? [] : state.dislikedMovies.filter(dislikedMovie => dislikedMovie._id !== action.movie._id),
            }
        case ADD_TO_DISLIKED_MOVIES:
            return {
                ...state,
                likedMovies: state.likedMovies.length === 1 ? [] : state.likedMovies.filter(likedMovie => likedMovie._id !== action.movie._id),
                dislikedMovies: [...state.dislikedMovies, action.movie],
            }
        case UPDATE_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        case UPDATE_MOVIE_PREFERENCES:
            return {
                ...state,
                dislikedMovies: action.dislikedMovies,
                likedMovies: action.likedMovies
            }
        default:
            return state ? state : '';
    }
};

export function useMovieReducer(initialState) {
    return useReducer(reducer, initialState);
}