import turbo from 'turbo360'
const APP_ID = '5b782b9794fc4b0014aeab94'

const postRequest = (resource, params, actionType) => {
   return dispatch => turbo({ site_id: APP_ID }).create(resource, params)
      .then(data => {
         if (actionType != null) {
            dispatch({
               type: actionType,
               data: data
            })
         }

         return data
      })
      .catch(err => {
         throw err
      })
}

const getRequest = (resource, params, actionType) => {
   return dispatch => turbo({ site_id: APP_ID }).fetch(resource, params)
      .then(data => {
         if (actionType != null) {
            dispatch({
               type: actionType,
               params: params, // can be null
               data: data
            })
         }

         return data
      })
      .catch(err => {
         throw err
      })
}

export default {
   
   postRequest: postRequest,
   getRequest: getRequest

}
