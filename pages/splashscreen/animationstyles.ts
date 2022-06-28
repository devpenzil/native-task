// import {withSpring} from 'react-native-reanimated';

export const animeFirst = (trigger: number) => {
  return {
    transform: [
      {
        translateX: trigger === 40 ? -40 : 0,
      },
    ],
  };
};

// {
//   ('Hello');
//   return {
//     transform: [
//       {
//         translateX: trigger === 40 ? 90 : 400,
//       },
//     ],
//   };
// }
