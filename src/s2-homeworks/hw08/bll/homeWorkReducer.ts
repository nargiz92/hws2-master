import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
              return  [...state].sort((u1, u2) => u1.name.localeCompare(u2.name))
            }
            if (action.payload === 'down') {
               return [...state].sort((u1, u2) => u2.name.localeCompare(u1.name))
            } else
                return state // need to fix
        }
        case 'check': {
            action.payload === 18
            return state.filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}

//
// export const sortUpAC=('up':string,)=>{
//     return{
//         type:'sort',
//         payloud:'up',''
//
//     }as const
// }
//
//
// export const check18AC=(payload:number)=>{
//     return{
//         type:'check',
//         payloud:18
//
//     }as const
// }
//

