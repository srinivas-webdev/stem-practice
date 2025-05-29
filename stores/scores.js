import { defineStore } from 'pinia';
/* scores object
scores = {
  'maths': {
    '06': [ // chapters
      [ // sections
        [ // questions
          { // question
            'alreadyAttempted': false,
            'solved': false 
          }
        
        ]

        
      ]
    ]  
  }
}
*/

export const useScoresStore = defineStore('scores', () => {
  const scores = ref({});
   
  return {
    scores
  }
});